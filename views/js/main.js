let header = document.querySelector('header');
let section = document.querySelector('section');
let jsonURL = 'json/superheroes.json'
let request = new XMLHttpRequest();
let productList = [];
let brandList = [];
let cart = [];
let maxPrice = 0;

function onLoad() {
    // document.getElementById("p_test").innerHTML = Date();

    console.log('Main.js is running!')
    // console.log(document.querySelector('.plan-title').innerHTML);
    // console.log('JS: ', products[0])
    // console.log('JS: ', sellers[0])
    console.log('JS: ', user.data)
    updateCartQty();
    // document.documentElement.className = 'light'
    productList = products;
    for (let i = 0; i < productList.length; i++) {
        let category = productList[i]["brand"]
        if (!brandList.includes(category)) {
            brandList.push(category)
        }
        if (productList[i].price > maxPrice) {
            maxPrice = productList[i].price;
        }
    }
    brandList.sort();

    loadBooks(productList, "", "All Brands", maxPrice);
    loadBrandList(brandList);
    loadHomeState();
    $("#listBox").hide();
    if (user.isLogin) {
        let userPageUrl = new URL(window.location.origin + "/user/detail");
        userPageUrl.searchParams.append("id", user.data._id.toString())
        let userSignOutUrl = new URL(window.location.origin + "/sign_out");
        console.log('tests', userSignOutUrl.toString())
        document.getElementById("login_toggle").innerHTML
            = `<p>Hi,<a id="userPageLink" href='#'>${user.data.firstname}</a>&nbsp&nbsp<a id="signOutLink" href='#'>Sign Out</a> </p>`;
        document.getElementById("userPageLink").setAttribute("href", userPageUrl);
        document.getElementById("signOutLink").setAttribute("href", userSignOutUrl);
        // document.getElementById("signOutLink").setAttribute("href", "/login.html");
    }
    //Not login yet
    else {
        document.getElementById("login_toggle").innerHTML =
            `<p><a href="../login.html">Login</a>&nbsp&nbsp&nbsp&nbsp<a href="../sign_up.html">Sign Up</a><br>

            <a id='loginLink' href="#">Login2 </a> </p>`;
        document.getElementById("loginLink").setAttribute("href", "JavaScript:void(0)");
        // document.getElementById("loginLink").setAttribute("onclick", `openLoginDialog()`);
        let handler = function (event) {
            if ($('#loginDialog').css('display') !== 'none') {
                if (document.querySelector('#loginDialog').contains(event.target)) {
                    // console.log('clicked inside');
                }
                else {
                    // console.log('clicked outside');
                    removeEventListener('mouseup', handler)
                    $("#loginDialog").hide(300);
                }
            }
            else {

            }
        };
        $("#loginLink").click(function () {
            $("#loginDialog").toggle(300);
            // $("#body").css({ opacity: 0.6 });
            addEventListener('mouseup', handler)
        });

        $("#loginDialog_close").click(function () {
            $("#loginDialog").toggle(300);
            removeEventListener('mouseup', handler);
        });
    }

    $("#btn_search").unbind().click(function () {
        let keyword = $("#inputBox_search").val();
        let brand = $("#list_select").val();
        let price = $("#range_slider").val();
        $("#HomeState").hide();
        $("#listBox").show();
        loadBooks(productList, keyword, brand, price)
    })

    //close product dialog
    $(document).mouseup(function (e) {
        let container = $("#productDialog");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(300);
            // $("#table_productReviews > tr").remove();
            // $("#table_productReviews tbody").empty();
            // $("#table_productReviews").remove();
            // console.log($('#table_productReviews')[0].children[2].rows)
        }
    });

    let slider = document.getElementById("range_slider");
    let slider_value = document.getElementById("range_slider_value");
    slider.setAttribute("max", maxPrice);
    slider_value.innerHTML = 'Max Price:' + maxPrice;
    ; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        slider_value.innerHTML = `Max Price: ${this.value}`;
    }

    const ws = new WebSocket("ws://localhost:8000");
    ws.onopen = function () {
        console.log('Websocket is listening on: ', ws.url)
    }

    ws.addEventListener('open', function (event) {
        ws.send('Hello Server!');
    });
    ws.addEventListener('message', function (event) {
        console.log(event)
    });
    ws.onmessage = function (event) {
        console.log(event.data)
    }
    // $(document).ready(function () {
    //     $('#website_name').click(function () {
    //         let name = $('#website_name');
    //         // name.animate({left:'100px'},"fast");
    //         name.animate({opacity: '0.1'}, "slow");
    //         // name.animate({right:'100px'},"fast");
    //         name.animate({opacity: '1'}, "slow");
    //     });
    // });
}


//TODO not sure if website should obverses the DB or send query every time
function loadBooks(list, search_keyword, search_brand, search_price) {
    console.log(`search for => keyword:${search_keyword}, brand:${search_brand}, max price:${search_price},`)
    let table = document.getElementById("table_books").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    let id = 0;
    for (let i = 0; i < list.length; i++) {
        if (search_brand !== "All Brands") {
            if (list[i].brand !== search_brand) {
                continue;
            }
        }
        if (search_keyword !== "") {
            if (!list[i].title.toLowerCase().includes(search_keyword.toLowerCase())) {
                continue;
            }
        }
        if (list[i].price > search_price) {
            continue;
        }
        let row = table.insertRow(id);
        row.setAttribute("onclick", "onRowClicked(this)")

        let image = row.insertCell(0);
        let img = document.createElement("img");
        img.src = `../img/${list[i].brand}.jpeg`;
        img.style.width = '40pt'
        img.style.height = '60pt'
        image.append(img)

        let title = row.insertCell(1);
        title.innerHTML = list[i].title;

        let brand = row.insertCell(2);
        brand.innerHTML = list[i].brand;


        let seller = sellers.find(function (obj, index) {
            if (obj._id === list[i].seller)
                return true;
        });
        let sellerName = row.insertCell(3);
        sellerName.innerHTML = `<a href="#" title="${seller.email}\n${seller._id}">${seller.firstname} ${seller.lastname}</a>`;
        // sellerName.innerHTML = seller.firstname + " " + seller.lastname;

        let price = row.insertCell(4);
        price.innerHTML = list[i].price;

        let stock = row.insertCell(5);
        stock.innerHTML = list[i].stock;

        //hidden column of ids
        let _id = row.insertCell(6);
        _id.innerHTML = `<td style="visibility:collapse;">${list[i]._id}</td>`;
        document.getElementById("table_books").getElementsByTagName('tbody')[0]
            .getElementsByTagName('tr')[id].getElementsByTagName('td')[6]
            .style.display = 'none';
        id++;
    }

    // let inputs = document.querySelector('tbody').getElementsByTagName('input');
    // checkboxes

    let trs = document.getElementById("table_books").querySelector('tbody').querySelectorAll('tr');
    for (let i = 0; i < trs.length; i++) {
        trs[i].onmouseover = function () {
            this.style.backgroundColor = "var(--checked-highlight)";
        }
        trs[i].onmouseout = function () {
            let searchWord = document.getElementById("inputBox_search").value;
            //check if searched
            if (this.cells[2].textContent.toLowerCase().includes(searchWord.toLowerCase())
                && searchWord !== "") {
                this.style.backgroundColor = "var(--search-highlight)";
            }
            else {
                //check if checked
                if (trs[i].cells[0].children[0].checked) {
                    this.style.backgroundColor = "var(--checked-highlight)";
                }
                else {
                    this.style.backgroundColor = "var(--bg-color)";
                }
            }
        }

    }
    // var tbl = document.getElementById('listBox');
    // var col = tbl.getElementsByTagName('col')[col_no];
}

function loadBrandList(categoryList) {
    let select = document.getElementById('list_select');
    let opt_default = document.createElement('option');
    opt_default.value = "All Brands";
    opt_default.innerHTML = "All Brands";
    opt_default.selected = "selected"
    select.appendChild(opt_default);
    for (let i = 0; i < categoryList.length; i++) {
        let opt = document.createElement('option');
        opt.value = categoryList[i];
        opt.innerHTML = categoryList[i];
        select.appendChild(opt);
    }
    addCategory("Unknown")
}

//extra category
function addCategory(category) {
    let select = document.getElementById('list_select');
    let opt = document.createElement('option');
    opt.value = category;
    opt.innerHTML = category;
    select.appendChild(opt);
}


function reset_search() {
    let list_select = document.getElementById('list_select');
    list_select.value = "All Brands"
    let inputBox_search = document.getElementById('inputBox_search');
    inputBox_search.value = ""
    let slider = document.getElementById('range_slider');
    slider.value = maxPrice;
    let slider_value = document.getElementById('range_slider_value');
    slider_value.innerText = 'Max Price:' + maxPrice;
}


function onRowClicked(row) {
    //console.log(document.getElementById("table_books").querySelectorAll('tr')[row.rowIndex].querySelectorAll('td')[6].innerHTML)

    let phoneID = document.getElementById("table_books").querySelectorAll('tr')[row.rowIndex].querySelectorAll('td')[6].innerHTML;
    console.log(phoneID);
    let url = new URL(window.location.origin + "/getPhoneByID")
    url.searchParams.append("id", phoneID)
    axios.get(url
    )
        .then(function (doc) {
            console.log(doc.data);
            $("#table_productReviews > tr").remove();
            $("#table_productReviews tbody").empty();
            // $("#table_productReviews").remove();
            $("#productDialog_title").html(doc.data.title);
            $("#productDialog_img").attr("src", `../img/${doc.data.brand}.jpeg`);
            $("#table_productInfo_brand").html(doc.data.brand);
            let seller = sellers.find(function (obj, index) {
                if (obj._id === doc.data.seller)
                    return true;
            });
            $("#table_productInfo_seller").html(`<a href="#" title="${seller.email}">${seller.firstname} ${seller.lastname}</a>`);
            $("#table_productInfo_price").html(doc.data.price);
            $("#table_productInfo_stock").html(doc.data.stock);
            let quan = 0;
            console.log(cart);
            for (let i = 0; i < cart.length; i++) {
                if(user.data._id==undefined){
                    quan = 0;
                }else if (cart[i].id === phoneID && cart[i].userId===user.data._id) {
                    quan = cart[i].quantity;
                }
            }
            $("#table_productInfo_quantity").html(quan);
            if (doc.data.reviews.length <= 3) {
                console.log(doc.data.reviews.length + '<=3')
                for (let i = 0; i < doc.data.reviews.length; i++) {
                    let reviewer = sellers.find(function (obj, index) {
                        if (obj._id === doc.data.reviews[i].reviewer)
                            return true;
                    });
                    if (doc.data.reviews[i].comment.length > 200) {
                        let row = $("<tr>"
                            + "<td>" + `${reviewer.firstname} ${reviewer.lastname}` + "</td>"
                            + "<td>" + doc.data.reviews[i].rating + "</td>"
                            + "<td>" + doc.data.reviews[i].comment.substring(0, 200) + "</td>"
                            + "<td style='display: none'>" + doc.data.reviews[i].comment + "</td>"
                            + "</tr>");
                        $('#table_productReviews').find('tbody').append(row);
                    }
                    else {
                        let row = $("<tr>"
                            + "<td>" + `${reviewer.firstname} ${reviewer.lastname}` + "</td>"
                            + "<td>" + doc.data.reviews[i].rating + "</td>"
                            + "<td>" + doc.data.reviews[i].comment + "</td>"
                            + "</tr>");
                        $('#table_productReviews').find('tbody').append(row);
                    }
                }
                $("#productDialog_ShowMoreReviews").hide();
            }
            else {
                console.log(doc.data.reviews.length + '>3')
                for (let i = 0; i < 3; i++) {
                    let reviewer = sellers.find(function (obj, index) {
                        if (obj._id === doc.data.reviews[i].reviewer)
                            return true;
                    });
                    if (doc.data.reviews[i].comment.length > 200) {
                        let row = $("<tr>"
                            + "<td>" + `${reviewer.firstname} ${reviewer.lastname}` + "</td>"
                            + "<td>" + doc.data.reviews[i].rating + "</td>"
                            + "<td>" + doc.data.reviews[i].comment.substring(0, 200) + "</td>"
                            + "<td style='display: none'>" + doc.data.reviews[i].comment + "</td>"
                            + "</tr>");
                        $('table#table_productReviews').find('tbody').append(row);
                    }
                    else {
                        let row = $("<tr>"
                            + "<td>" + `${reviewer.firstname} ${reviewer.lastname}` + "</td>"
                            + "<td>" + doc.data.reviews[i].rating + "</td>"
                            + "<td>" + doc.data.reviews[i].comment + "</td>"
                            + "</tr>");
                        $('table#table_productReviews').find('tbody').append(row);
                    }
                    // console.log($('#table_productReviews')[0].children[2].rows)
                }
                $("#productDialog_ShowMoreReviews").show();
                const rows = document.getElementById("table_productReviews").querySelectorAll('tr');
                rows.forEach(row => {
                    if (row.cells[3]) {
                        let cell = row.insertCell();
                        let btn = document.createElement("button");
                        btn.innerHTML = "Show More";
                        btn.addEventListener("click", function () {
                            row.cells[2].innerHTML = row.cells[3].innerHTML;
                            btn.style = "display:none"
                        })
                        cell.append(btn)
                    }
                });
            }

            $("#productDialog_ShowMoreReviews").unbind().click(function () {
                for (let i = 3; i < doc.data.reviews.length; i++) {
                    let reviewer = sellers.find(function (obj, index) {
                        if (obj._id === doc.data.reviews[i].reviewer)
                            return true;
                    });
                    if (doc.data.reviews[i].comment.length > 200) {
                        let row = $("<tr>"
                            + "<td>" + `${reviewer.firstname} ${reviewer.lastname}` + "</td>"
                            + "<td>" + doc.data.reviews[i].rating + "</td>"
                            + "<td>" + doc.data.reviews[i].comment.substring(0, 200) + "</td>"
                            + "<td style='display: none'>" + doc.data.reviews[i].comment + "</td>"
                            + "</tr>");
                        $('table#table_productReviews').find('tbody').append(row);
                    }
                    else {
                        let row = $("<tr>"
                            + "<td>" + `${reviewer.firstname} ${reviewer.lastname}` + "</td>"
                            + "<td>" + doc.data.reviews[i].rating + "</td>"
                            + "<td>" + doc.data.reviews[i].comment + "</td>"
                            + "</tr>");
                        $('table#table_productReviews').find('tbody').append(row);
                    }
                }

                $("#productDialog_ShowMoreReviews").hide();
                const rows = document.getElementById("table_productReviews").querySelectorAll('tr');
                rows.forEach(row => {
                    if (row.rowIndex > 2) {
                        if (row.cells[3]) {
                            let cell = row.insertCell();
                            let btn = document.createElement("button");
                            btn.innerHTML = "Show More";
                            btn.addEventListener("click", function () {
                                row.cells[2].innerHTML = row.cells[3].innerHTML;
                                btn.style = "display:none"
                            })
                            cell.append(btn)
                        }
                    }
                });
            });

            $("#post_review_form").submit(function (e) {
                e.preventDefault();
            });
            $("#post_review_btn").unbind().click(function () {
                let pid = phoneID;
                let uid = user.data._id;
                let rating = $("#post_review_rating").val();
                let comment = $("#post_review_comment").val();
                console.log(pid, uid, rating, comment);
                axios.post(window.location.origin + `/postReview`, {
                    'pid': pid,
                    'post_uid': uid,
                    'post_rating': rating,
                    'post_comment': comment
                })
                    .then(function (response) {
                        console.log(response.data);
                        if (response.data.isSuccess === true) {
                            alert("Review Posting Successfully!")
                        }
                        else {
                            alert("Review Posting Failed!")
                        }
                    })
                    .catch(function (error) {
                        alert("Review Posting Failed!")
                        console.log(error);
                    });
            })

            $("#btn_add_to_cart").unbind().click(function () {
                if(user.data._id==undefined){
                    window.location.href="login.html"
                }else{
                let uid = user.data._id;
                let q = prompt("Please enter the quantity:", 1);
                if (q === "" || q<=0 || isNaN(q)) {
                    alert("Illegal input!")
                }else if (q > doc.data.stock){
                    alert("More than stock number!")
                }else if(q===null){
                    alert("Illegal input!")
                }
                else {
                    alert("Item is Added to Cart!")
                    let flag = false;
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].id === phoneID&&cart[i].userId===uid) {
                            cart[i].quantity += parseInt(q);
                            flag = true;
                        }
                    }
                    if (flag === false) {
                        cart.push({id: phoneID, quantity: parseInt(q),userId:uid});
                    }
                    sessionStorage.setItem("cart", JSON.stringify(cart));
                    let quan1;
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].id === phoneID&&cart[i].userId===uid) {
                            quan1 = cart[i].quantity;
                        }
                    }
                    $("#table_productInfo_quantity").html(quan1);
                    console.log(cart,"12121212122")
                    updateCartQty()
                }
            }
            })
        })
        .catch(function (error) {
            console.log(error)
        })

    $("#productDialog").toggle(300);
    $("#div_verytop").scrollTop()

    // let phoneID = document.querySelectorAll('tr')[row.rowIndex].querySelectorAll('td')[7].innerHTML;
    // let url = new URL(window.location.origin + "/getPhoneByID")
    // url.searchParams.append("id", phoneID)
    // axios.get(url
    // ).then(function (doc) {
    //     console.log(doc.data);
    //     alert("phoneID: " + doc.data._id)
    // }).catch(function (error) {
    //     console.log(error)
    // })

    //
    // fetch(url)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (doc) {
    //         console.log(JSON.stringify(doc));
    //         console.log(doc.reviews);
    //         alert(doc._id)
    //     });
    // console.log(row.rowIndex);
    // let checkbox = row.getElementsByTagName('input')[0];
    // checkbox.checked = !checkbox.checked;

    // selectOneBook(row.rowIndex);
}


function loadHomeState() {
    getSoldOutSoon();
    getTop5RatedPhones()
}

function getSoldOutSoon() {
    let url = new URL(window.location.origin + "/getSoldOutSoon")
    axios.get(url
    )
        .then(function (doc) {
            console.log('getSoldOutSoon', doc.data);
            for (let i = 0; i < doc.data.length; i++) {
                let row = $("<tr>"
                    + "<td>" + `<img style='width: 40pt; height: 60pt' src=\"../img/${doc.data[i].brand}.jpeg\">` + "</td>"
                    + "<td>" + doc.data[i].price + "</td>"
                    + "<td>" + doc.data[i].title + "</td>"
                    + "<td style=\"display:none;\">" + doc.data[i]._id + "</td>"
                    + "</tr>");
                $('#table_soldOutSoon').append(row);

            }

        })
        .catch(function (error) {
            console.log(error)
        })
}

function getTop5RatedPhones() {
    let url = new URL(window.location.origin + "/getTop5RatedPhones")
    axios.get(url
    )
        .then(function (doc) {
            console.log('getTop5RatedPhones', doc.data);
            for (let i = 0; i < doc.data.length; i++) {
                let row = $("<tr>"
                    + "<td>" + `<img style='width: 40pt; height: 60pt' src=\"../img/${doc.data[i].brand}.jpeg\">` + "</td>"
                    + "<td>" + doc.data[i].avgRating + "</td>"
                    + "<td>" + doc.data[i].title + "</td>"
                    + "<td style=\"display:none;\">" + doc.data[i]._id + "</td>"
                    + "</tr>");
                $('#table_bestSeller').append(row);

            }

        })
        .catch(function (error) {
            console.log(error)
        })
}


function updateCartQty() {
    let qty = getCartTotalQty();
    console.log(qty,"11111")
    document.getElementById("cart_qty").innerHTML = "(" + qty.toString() + ")";

}


function getCartTotalQty() {
    var totalQty = 0;
    var cart1= JSON.parse(sessionStorage.getItem('cart'))
    if (cart1!=null){
        cart=cart1
    }
    if(user.data._id!==undefined){
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].userId==user.data._id){
        let qty = Number(cart[i].quantity);
        totalQty += qty;
        }
    }}
    return totalQty;
}

function checkout() {
    if(user.data._id===undefined){
        window.location.href="login.html"
        
    }else{
        console.log(user.data._id,"Userid!!!!!!")
        window.location.href="checkout.html?id="+user.data._id;
    }
}

function onCartClicked() {

}

function isCartContained(title) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            return i;
        }
    }
    return -1;
}

function searchTableByTitle(title) {
    // console.log("searchTablebyTitle -> "+title)
    for (let i = 0; i < productList.length; i++) {
        if (productList[i]["title"] === title) {
            return productList[i];
        }
    }
    return null;
}

function theme_toggle() {

    if (document.documentElement.className === 'light') {
        document.documentElement.className = 'dark';
        document.getElementById("theme_toggle").innerHTML = "Turn on the light!";
    }

    else {
        document.documentElement.className = 'light';
        document.getElementById("theme_toggle").innerHTML = "Turn off the light!";
    }

    console.log("Switch to " + document.documentElement.className + " theme!")
    // document.getElementById("btn_search").disabled = true;
}

function openLoginDialog() {
    // document.getElementById('loginDialog').style.display = 'block';
    // $('loginLink').ready(function (){
    //     $("loginDialog").show(1000)
    // })

    // let userLoginUrl = new URL(window.location.origin + "/login");
    // document.getElementById('dialog_login_form').action = userLoginUrl;
}

function closeLoginDialog() {
    // document.getElementById('loginDialog').style.display = 'none';
    // $("loginDialog").hide(1000)
}


function dialog_login_btn_OnClick() {
    let email = document.getElementById('dialog_login_email').value;
    let password = document.getElementById('dialog_login_password').value;

    if (email.length === 0) {
        alert("Email address should not be empty")
    }
    else if (email.length === 0) {
        alert("Password should not be empty")
    }
    else {
        console.log(email, password)
        axios.post(window.location.origin + `/login`, {
            'email': email,
            'password': password,
        })
            .then(function (response) {
                console.log(response.data);
                if (response.data.isSuccess === true) {
                    location.reload();
                }
                else {
                    alert("Login Failed!")
                }
            })
            .catch(function (error) {
                alert("Login Failed!")
                console.log(error);
            });
    }


}

//should not be used for api security
function getJsonObject(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) success(JSON.parse(xhr.responseText));
            }
            else {
                if (error) error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
