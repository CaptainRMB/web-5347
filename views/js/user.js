const app = new Vue({
    el: '#userPage',

    data: {
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        tabProfile: true,
        tabPassword: false,
        tabList: false,
        pwdChanged:false,
        updateClicked:false,
        ifViewClicked: false,
        addClicked: false,
        noticeProfile: '',
        noticePwdChange: '',
        currentPwd: '',
        newPwd: '',
        userListing: '',
        addTitle: '',
        addBrand: 'Apple',
        addQuantity: '',
        addPrice: '',
        verifiedPassword: '',
        showNotice: false
    },

    methods: {
        //When update the profile, password will be verified first
        //If password matched, change the profile in database and session
        updateProfile: function() {
            console.log(1);
            this.showNotice = true;
            if(!this.updateClicked){
                this.updateClicked = true;
                this.noticeProfile ="Please enter your password first";
            }
            else {
                if(this.verifiedPassword){
                    console.log(this.email, this.firstname, this.lastname, this.verifiedPassword);
                    axios.post(window.location.origin + `/changeProfile`,
                        {id: this.id, email: this.email, firstname: this.firstname, lastname: this.lastname,
                            // password: md5(this.verifiedPassword),
                            password: this.verifiedPassword})
                        .then(response => {
                            // console.log(response);
                            if(response.data.success) {
                                // console.log(response);
                                this.noticeProfile = "The profile has been successfully changed ";
                                this.updateClicked = false;
                            }
                            else {
                                if(response.data.reason === 'pwd') {
                                    console.log(4);
                                    this.noticeProfile = "The password is incorrect";
                                }
                                else {
                                    this.noticeProfile = "The email is used";
                                }
                            }
                            this.verifiedPassword = ''
                        })
                }
                else{
                    this.noticeProfile = "Please enter the password to verify identity"
                }
            }

        },


        //Change the password after verified the current password
        checkPassword: function(){
            axios.post(window.location.origin + `/changePassword`, {
                id: this.id,
                currentPwd: this.currentPwd,
                newPwd: this.newPwd
                // currentPwd: md5(this.currentPwd),
                // newPwd: md5(this.newPwd)
            })
                .then(response => (
                    console.log(this.currentPwd, this.newPwd),
                    this.pwdChanged = true,
                        this.noticePwdChange = (response["data"] ?
                            "The password has been successfully changed"
                            :
                            "The password is incorrect" ),
                        this.currentPwd = '',
                        this.newPwd = ''
                ))
        },


        //Enable or disable the phone list added by user
        check: function(event, index) {
            axios.post(window.location.origin + `/changePhoneList`, {
                phoneList: this.userListing[index],
                listOperation: (event.target.checked ? "enable" : "disable")});
        },



        //Remove the phone list added by user
        removePhone: function(event, index) {
            console.log(this.userListing);
            axios.post(window.location.origin + `/changePhoneList`, {
                phoneList: this.userListing[index],
                listOperation: "remove"})
                .then(response => {
                    this.userListing.splice(index, 1);
                });
        },


        //When click add a new list, show the input text and brand selection
        addListing: function(){
            this.addClicked = true;
        },


        //When confirm the added list, add the list to the database
        confirmAddList: function() {
            if(this.addTitle && this.addQuantity && this.addPrice) {
                if(Number.isInteger(parseFloat(this.addQuantity))
                    && parseFloat(this.addPrice)
                    && Math.sign(parseFloat(this.addQuantity)) != -1){
                    if(!this.userListing) {
                        this.userListing = []
                    }

                    this.userListing.push({
                        "title": this.addTitle,
                        "brand": this.addBrand,
                        "image": `/img/${this.addBrand}.jpeg`,
                        "stock": this.addQuantity,
                        "price": this.addPrice,
                        "review": [],
                        "sellername": `${this.firstname} ${this.lastname}`
                    });

                    axios.post(window.location.origin + `/changePassword`, {
                        phoneList: this.userListing[this.userListing.length - 1],
                        listOperation: "add"})
                        .then(response => {
                            listWithId = response.data;
                            this.userListing[this.userListing.length - 1] = listWithId;
                        });

                    this.addClicked = false;
                    this.addTitle = '';
                    this.addBrand = 'Apple';
                    this.addQuantity = '';
                    this.addPrice = '';
                }
                else {
                    alert("Please enter the positive integer in quantity and valid number in price!")
                }

            }
            else {
                alert("Please fill in all content!")
            }

        },

        //Cancel the add list operation
        cancelAddList: function() {
            this.addClicked = false;
            this.addTitle = '';
            this.addBrand = 'Apple';
            this.addQuantity = '';
            this.addPrice = '';
        },


        /*Three function combined to word as the navigation bar*/
        showProfile: function(){
            // console.log(_email, _firstname, _lastname);
            let searchResult = new URLSearchParams(window.location.search);
            console.log(searchResult.get("id"));
            this.tabProfile = true,
                this.tabPassword = false,
                this.tabList = false
        },

        showPassword: function(){
            let searchResult = new URLSearchParams(window.location.search);
            console.log(searchResult.get("id"));
            this.tabProfile = false,
                this.tabPassword = true,
                this.tabList = false
        },

        showList: function(){
            this.tabProfile = false,
                this.tabPassword = false,
                this.tabList = true
        },


        //Sign out the account, need to be confirmed
        //Redirect to main page with home state after confirmed
        signOut: function() {
            answer = confirm("Are you sure to sign out?")
            if(answer) {
                axios.post(window.location.origin + `/signOut`);
                console.log("Sign out Success")
                window.location.href = '/';
            }
            else{
                console.log("Sign out canceled")
            }
        },

    },

    //Execute when Vue instance created
    mounted() {
        //get the user information from server session
        let searchResult = new URLSearchParams(window.location.search);
        console.log(searchResult.get("id"));
        this.id = searchResult.get("id");
        let url = new URL(window.location.origin + `/getUserByID`)
        url.searchParams.append("id", searchResult.get("id"));

        axios.get(url)
            .then(response => {
                this.email = response.data[0].email;
                this.firstname = response.data[0].firstname;
                this.lastname = response.data[0].lastname;
                console.log(response.data[0].firstname, response.data[0].lastname, response.data[0].email);
            })
        // axios.get('userinfo')
        //     .then(response => {
        //         this.email = response.data.email,
        //             this.firstname = response.data.firstname,
        //             this.lastname = response.data.lastname
        //     });

        //get the user added list from database

        let url2 = new URL(window.location.origin + "/userListing")

        url2.searchParams.append("id", this.id);
        console.log(url2);
        console.log(this.id);
        axios.get(url2)
        //axios.get('userListing')
            .then(response => {
                console.log(response);
                if(response["data"].length != 0){
                    this.userListing = response["data"]
                }
            })

    }

});
