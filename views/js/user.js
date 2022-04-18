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

function fillUserInfo(user){
    let table = document.getElementById("table_userInfo").getElementsByTagName('td');
    table[0].innerHTML = user.firstName + " " + user.lastName;
    table[1].innerHTML = user.lastName;
    table[2].innerHTML = user.password;
    document.getElementById("text_title").innerHTML = "Hello" + user.firstName;
}