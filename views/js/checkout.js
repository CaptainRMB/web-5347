cart=[];
phoneBill=[];
var uid=''
window.onload=function(){
    cart= JSON.parse(sessionStorage.getItem('cart'))
    console.log(cart)
    console.log(location.href,"user.data._id")
    var loc=location.href
    	var n1 = loc.length;//地址的总长
	var n2 = loc.indexOf("?");//取得=号的位置
	var parameter = decodeURI(loc.substr(n2+1, n1-n2));//截取从?号后面的内容,也就是参数列表
    console.log(parameter,"Para")
    uid=parameter.slice(3)
    if(cart!==null&&cart!==[]){
        var promise = new Promise(function(){
            cart.forEach(item => {
                if(item.userId==uid){
                let phoneID = item.id;
                let url = new URL(window.location.origin + "/getPhoneByID")
                url.searchParams.append("id", phoneID)
                axios.get(url
                ).then(function (doc) {
                    console.log(doc.data)
                    console.log(doc.data.title);
                    phoneBill.push({['title']:doc.data.title,['price']:doc.data.price,['quantity']:item.quantity,['stock']:doc.data.stock,['id']:item.id,['userId']:uid})
                    console.log(phoneBill,"phoneBill")
                }).finally(function(){
                    loadBill(phoneBill);
                })
            }
            })
        })
    };
}

// press go back home button
function gobackhome(){
    window.location.href="main";
}

// press check out button
function calculate(){
    var cal=confirm("Are you sure you want to check out?")
    if (cal==true){
        cart= JSON.parse(sessionStorage.getItem('cart'))
        if(cart!==null&&cart!==[]){
            let pCart=[]
            cart.forEach(item => {
                if(item.userId==uid){
                pCart.push({['pId']:item.id,['pQuantity']:item.quantity})
                }
            });
            console.log(pCart,"pCart!!!!!!!")
            axios.post(window.location.origin + '/checkOutChangeStock', {
                'pCart': pCart,
            })
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.isSuccess === true) {
                        alert("Check Out Successfully!")
                        // sessionStorage.removeItem("cart");
                        var k=0;
                        cart.forEach(item => {
                            if(item.userId==uid){
                                cart.splice(k,1)
                            }
                            k++;
                        });
                        sessionStorage.setItem("cart",JSON.stringify(cart));
                        console.log("this item success!!!")
                        document.getElementsByTagName('tbody')[0].innerHTML = '';
                        document.getElementById("total_price").innerHTML='';

                    }
                    else {
                        alert("Check Out Failed!")
                        console.log("this item fail!!!")
                    }
                })
                .catch(function (error) {
                    alert("Check Out Failed!")
                    console.log(error);
                });
        }
    }
}

// update total price
function updateAllPrice(totalMoney) {
    console.log(totalMoney,"totalmoney")
    document.getElementById("total_price").innerHTML = "Total Price: " + totalMoney.toFixed(2) + " $";

}

// load all bills
function loadBill(phoneBill){
    cart= JSON.parse(sessionStorage.getItem('cart'))
    row=''
    money=0;
    totalMoney=0;
    if(cart!==null){
        console.log(phoneBill,"phonebill");
        let rowNum=0;
        phoneBill.forEach(item => {
            console.log(phoneBill,"phonebill")
            row +='<tr>';
            row +='<td colspan="4">'+item.title+'</td>';
            row +='<td colspan="1">'+item.price+'</td>';
            row +='<td colspan="1">'+'<input type="number" value='+item.quantity+' onchange="changeMoney(this.value,'+rowNum+',&quot;'+item.price+'&quot;,&quot;'+item.id+'&quot;)">'+'</td>';
            money=item.price*item.quantity;
            totalMoney=money+totalMoney
            row +='<td colspan="1">'+money+'</td>'
            row +='<td colspan="1"><button class="removeButton" type="button" onclick="removeItem(&quot;'+item.id+'&quot;)"><span>Remove </span></button></td>'
            row +='</tr>'
            rowNum++;
        })
    }
    updateAllPrice(totalMoney)
    if(row===''){
        document.getElementsByTagName('caption')[0].innerHTML='No bill item data!'
        document.getElementsByTagName('tbody')[0].innerHTML = '';
    }else{
        document.getElementsByTagName('tbody')[0].innerHTML = row;
        // console.log(row,"row...")
    }
}

// delete one item
function removeItem(id){
    
    var r=confirm("Are you sure you want to delete this item?")
    if(r==true){
        cart= JSON.parse(sessionStorage.getItem('cart'))
        i=0
        cart.forEach(item => {
            if(item.id==id&&item.userId==uid){
                cart.splice(i,1);
            }
            i++;
        });
        // console.log(cart,"111111111111111111111111111")
        // sessionStorage.removeItem("cart");
        sessionStorage.setItem("cart",JSON.stringify(cart));
        i=0;
        phoneBill.forEach(item => {
            if(item.id==id){
                phoneBill.splice(i,1);
            }
            i++;
        });
        loadBill(phoneBill)
    }
}

// change quantity so the money and total price also change
function changeMoney(quantity,rowNumber,price,pid){
    var oldQuantity=phoneBill[rowNumber].quantity
    console.log(quantity,rowNumber,price)
    if(quantity>phoneBill[rowNumber].stock){
        alert("More than stock number");
        var t=document.getElementsByTagName('input')[rowNumber]
        console.log(t.value,'t.value!!!!!')
        t.value=phoneBill[rowNumber].stock
        quantity=phoneBill[rowNumber].stock


    }else if(quantity<=0){
        alert("Illegal Input!");
        var t=document.getElementsByTagName('input')[rowNumber]
        console.log(t.value,'t.value!!!!!')
        t.value=1
        quantity=1

    }
        phoneBill[rowNumber].quantity=quantity;
        document.getElementsByTagName('td')[rowNumber*5+3].innerHTML = quantity*price;
        var oldTotalPrice=document.getElementById("total_price").innerHTML.slice(13,-2)
        var totalMoney
        if(oldQuantity>quantity){
            totalMoney=parseFloat(oldTotalPrice)-(oldQuantity-quantity)*price
            document.getElementById("total_price").innerHTML = "Total Price: " + totalMoney.toFixed(2) + " $";
        }else if(oldQuantity<quantity){
            totalMoney=parseFloat(oldTotalPrice)+(quantity-oldQuantity)*price
            document.getElementById("total_price").innerHTML = "Total Price: " + totalMoney.toFixed(2) + " $";
        }
        cart= JSON.parse(sessionStorage.getItem('cart'))
        cart.forEach(item => {
            if(item.id==pid&&item.userId==uid){
                item.quantity=parseInt(quantity)
            }
        });
        sessionStorage.setItem("cart",JSON.stringify(cart));
    
    console.log(phoneBill,"phoneBillChange")

}