console.log("user.js调用")

function onLoad() {
    // console.log(test)
    // fillUserInfo({
    //     firstName:"John",
    //     lastName:"Doe",
    //     email:"ggggg@g",
    //     password:"pwd"}
    // )
    document.getElementById('text_timer').innerHTML = new Date().toLocaleString();
    setInterval(
        function () {
            document.getElementById('text_timer').innerHTML = new Date().toLocaleString();
        }, 1000
    );

}

function fillUserInfo(user) {
    let table = document.getElementById("table_userInfo").getElementsByTagName('td');
    table[0].innerHTML = user.firstName + " " + user.lastName;
    table[1].innerHTML = user.lastName;
    table[2].innerHTML = user.password;
    table[3].innerHTML = user.id;
    document.getElementById("text_title").innerHTML = "Hello" + user.firstName;
}

function requestDataFromDB() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = ActiveXObject()
    }
}

const app = new Vue({
    el: '#user',

    data: {
        email: '',
        firstname: '',
        lastname: '',
        editProfile: true,
        changePassword: false,
        manageListings: false,
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
        /*Three function combined to word as the navigation bar*/
        showProfile: function () {
            this.editProfile = true,
                this.changePassword = false,
                this.manageListings = false
        },

        showPassword: function () {
            this.editProfile = false,
                this.changePassword = true,
                this.manageListings = false
        },

        showList: function(){
            this.editProfile = false,
                this.changePassword = false,
                this.manageListings = true
        },
    },

    //Execute when Vue instance created
    mounted() {
        //get the user information from server session
        axios.get('userinfo')
            .then(response => {
                this.email = response.data.email,
                    this.firstname = response.data.firstname,
                    this.lastname = response.data.lastname
            });

        //get the user added list from database
        axios.get('userListing')
            .then(response => {
                if(response["data"].length != 0){
                    this.userListing = response["data"]
                }
            })

    }
})
