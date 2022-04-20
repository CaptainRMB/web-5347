let header = document.querySelector('header');
let section = document.querySelector('section');
let jsonURL = 'json/superheroes.json'
let request = new XMLHttpRequest();
let productList = [];
let brandList = [];
let cart = [];


function onLoad() {
    // document.getElementById("p_test").innerHTML = Date();
    console.log('Main.js is running!')
    // console.log(document.querySelector('.plan-title').innerHTML);
    // console.log('JS: ', products[0])
    // console.log('JS: ', sellers[0])
    console.log('JS: ', user)
    updateCartQty();
    // document.documentElement.className = 'light'
    productList = products;
    for (let i = 0; i < productList.length; i++) {
        let category = productList[i]["brand"]
        if (!brandList.includes(category)) {
            brandList.push(category)
        }
    }
    brandList.sort()

    loadBooks(productList, "All Categories")
    loadSelectList(brandList)
    if (user.isLogin) {
        let userPageUrl = new URL(window.location.origin + "/user/detail");
        userPageUrl.searchParams.append("id", user.data._id.toString())
        let userSignOutUrl = new URL(window.location.origin + "/sign_out");
        console.log('tsts', userSignOutUrl.toString())
        document.getElementById("login_toggle").innerHTML
            = `<p>Hi,<a id="userPageLink" href='#'>${user.data.firstname}</a>&nbsp&nbsp&nbsp&nbsp<a id="signOutLink" href='#'>Sign Out</a></p>`;
        document.getElementById("userPageLink").setAttribute("href", userPageUrl);
        document.getElementById("signOutLink").setAttribute("href", userSignOutUrl);
        // document.getElementById("signOutLink").setAttribute("href", "/login.html");
    }
    else {
        document.getElementById("login_toggle").innerHTML =
            `<a href="../login.html">Login in</a>&nbsp&nbsp&nbsp&nbsp<a href="../sign_up.html">Sign Up</a>`
    }

}

function loadBooks(list, filterWord) {
    let table = document.getElementById("table_books").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    let id = 0;
    for (let i = 0; i < list.length; i++) {
        if (filterWord !== "All Categories") {
            if (list[i].brand !== filterWord) {
                continue;
            }
        }
        let row = table.insertRow(id);
        row.setAttribute("onclick", "onRowClicked(this)")
        let checkbox = row.insertCell(0);
        cbox = document.createElement("INPUT");
        cbox.setAttribute("type", "checkbox");
        cbox.setAttribute("id", i);
        cbox.setAttribute("onclick", "onCheckboxClicked(this)")
        checkbox.append(cbox)

        let image = row.insertCell(1);
        img = document.createElement("img");
        img.src = `../img/${list[i].brand}.jpeg`;
        img.style.width = '40pt'
        img.style.height = '60pt'
        image.append(img)

        let title = row.insertCell(2);
        title.innerHTML = list[i].title;

        let brand = row.insertCell(3);
        brand.innerHTML = list[i].brand;


        let seller = sellers.find(function (obj, index) {
            if (obj._id === list[i].seller)
                return true;
        });
        let sellerName = row.insertCell(4);
        sellerName.innerHTML = `<a href="#" title="${seller.email}\n${seller._id}">${seller.firstname} ${seller.lastname}</a>`;
        // sellerName.innerHTML = seller.firstname + " " + seller.lastname;

        let price = row.insertCell(5);
        price.innerHTML = list[i].price;

        let stock = row.insertCell(6);
        stock.innerHTML = list[i].stock;
        id++;
    }

    // let inputs = document.querySelector('tbody').getElementsByTagName('input');
    // checkboxes

    let trs = document.querySelector('tbody').querySelectorAll('tr');
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
}

function loadSelectList(categoryList) {
    let select = document.getElementById('list_select');
    let opt_default = document.createElement('option');
    opt_default.value = "All Categories";
    opt_default.innerHTML = "All Categories";
    opt_default.selected = "selected"
    select.appendChild(opt_default);
    for (let i = 0; i < categoryList.length; i++) {
        let opt = document.createElement('option');
        opt.value = categoryList[i];
        opt.innerHTML = categoryList[i];
        select.appendChild(opt);
    }
    addCategory("Coding")
}

//extra category
function addCategory(category) {
    let select = document.getElementById('list_select');
    let opt = document.createElement('option');
    opt.value = category;
    opt.innerHTML = category;
    select.appendChild(opt);
}


function filter_books() {
    let select = document.getElementById('list_select');
    let filterWord = select.options[select.selectedIndex].text;
    console.log("Filtering->" + filterWord)
    loadBooks(productList, filterWord)
    search_books("refresh");
    let tr = document.getElementsByTagName("tr");
    if (tr.length === 1) {
        alert("No item is founded under this category!")
    }
}

function search_books(mode) {
    let tr = document.getElementsByTagName("tr");
    let searchWord = document.getElementById("inputBox_search").value
    console.log("Searching -> \"" + searchWord + "\"")
    let table = document.getElementById("table_books");
    let match_counter = 0;
    for (let i = 1; i < table.rows.length; i++) {
        tr[i].style.backgroundColor = "var(--bg-color)";
        let row = table.rows[i]
        if (row.cells[2].textContent.toLowerCase().includes(searchWord.toLowerCase())
        ) {
            if (searchWord !== "") {
                match_counter++;
                tr[i].style.backgroundColor = "var(--search-highlight)";
            }
            else {
                if (tr[i].cells[0].children[0].checked) {
                    tr[i].style.backgroundColor = "var(--checked-highlight)";
                }
                else {
                    tr[i].style.backgroundColor = "var(--bg-color)";
                }
            }

        }
        else {
            if (tr[i].cells[0].children[0].checked) {
                tr[i].style.backgroundColor = "var(--checked-highlight)";
            }
            else {
                tr[i].style.backgroundColor = "var(--bg-color)";
            }
        }
    }
    if (mode !== "refresh") {
        if (match_counter === 0) {
            alert("Found 0 matching result!")
        }
    }
}

function reset_search() {
    let list_select = document.getElementById('list_select');
    list_select.value = "All Categories"
    let inputBox_search = document.getElementById('inputBox_search');
    inputBox_search.value = ""
    filter_books()
}

function selectOneBook(index) {
    let trs = document.querySelectorAll('tr');
    for (let i = 0; i < trs.length; i++) {
        if (i !== index) {
            trs[i].cells[0].children[0].checked = false;
        }
    }
    let checkbox = trs[index].cells[0].children[0];
    checkbox.checked = !checkbox.checked;
    search_books("refresh");
}

function onRowClicked(row) {
    // console.log(row.rowIndex);
    // let checkbox = row.getElementsByTagName('input')[0];
    // checkbox.checked = !checkbox.checked;
    selectOneBook(row.rowIndex);
}

//this one is not working
function onCheckboxClicked(checkbox) {
    console.log("??")
    console.log(checkbox.rowIndex)
    checkbox.checked = !checkbox.checked;
    // console.log(this.value)
    if (this.checked) {
        // console.log("Checked!")
    }
    else {
        // console.log("Unchecked!")
    }
}

function addCart() {
    let tr = document.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let checkbox = tr[i].cells[0].children[0];
        if (checkbox.checked) {
            let title = tr[i].cells[2].textContent;
            // console.log(title)
            let index = isCartContained(title)
            if (index === -1) {
                let qty = prompt("Qty?");
                let book = {title: title, qty: Number(qty)};
                if (Number(qty) < 1) {
                    alert("Wrong Quantity Number!")
                    return;
                }
                else {
                    tr[i].cells[0].children[0].checked = false;
                    cart.push(book);
                    search_books("refresh");
                }

            }
            else {
                let qty = prompt("Qty?");
                cart[index].qty += Number(qty);
                tr[i].cells[0].children[0].checked = false;
                search_books("refresh");
            }
        }
        updateCartQty();
    }
    console.log("Cart:");
    console.log(cart);
    var totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let price = Number(searchTableByTitle(cart[i]["title"])["price"]);
        let qty = Number(cart[i].qty);
        totalPrice += price * qty;
    }
    console.log("totalPrice: $" + totalPrice);
}

function updateCartQty() {
    let qty = getCartTotalQty();
    document.getElementById("cart_qty").innerHTML = "(" + qty.toString() + ")";

}

function getCartTotalQty() {
    var totalQty = 0;
    for (let i = 0; i < cart.length; i++) {
        let qty = Number(cart[i].qty);
        totalQty += qty;
    }
    return totalQty;
}

function resetCart() {
    let dialog;
    dialog = confirm("Are you sure to reset the cart?");
    if (dialog === true) {
        cart = [];
        updateCartQty()
    }
    else {

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
