cart=[];
phoneBill=[];
window.onload=function(){
    cart= JSON.parse(sessionStorage.getItem('cart'))
    if(cart!=null||cart!=[]){
        var promise = new Promise(function(){
            cart.forEach(item => {
                let phoneID = item.id;
                let url = new URL(window.location.origin + "/getPhoneByID")
                url.searchParams.append("id", phoneID)
                axios.get(url
                ).then(function (doc) {
                    console.log(doc.data)
                    console.log(doc.data.title);
                    phoneBill.push({['title']:doc.data.title,['price']:doc.data.price,['quantity']:item.quantity,['stock']:doc.data.stock,['id']:item.id})
                    console.log(phoneBill,"phoneBill")
                }).finally(function(){
                    loadBill(phoneBill);
                })
            })
        })
    };
}

function gobackhome(){
    window.location.href="main";
}

function calculate(){
    var cal=confirm("Are you sure you want to check out?")
    if (cal==true){
        cart= JSON.parse(sessionStorage.getItem('cart'))
        if(cart!=null||cart!=[]){
            let pCart=[]
            cart.forEach(item => {
                pCart.push({['pId']:item.id,['pQuantity']:item.quantity})
            });
            console.log(pCart,"pCart!!!!!!!")
            axios.post(window.location.origin + '/checkOutChangeStock', {
                'pCart': pCart,
            })
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.isSuccess === true) {
                        // alert("Check Out Successfully!")
                        console.log("this item success!!!")
                    }
                    else {
                        //  alert("Check Out Failed!")
                        console.log("this item fail!!!")
                    }
                })
                .catch(function (error) {
                    //alert("Check Out Failed!")
                    console.log(error);
                });
        }
    }
}

function updateAllPrice(totalMoney) {
    console.log(totalMoney,"11111")
    document.getElementById("total_price").innerHTML = "Total Price: " + totalMoney.toFixed(2) + " $";

}

function loadBill(phoneBill){
    cart= JSON.parse(sessionStorage.getItem('cart'))
    row=''
    money=0;
    totalMoney=0;
    if(cart!=null){
        console.log(phoneBill,"asdfasdf");
        let rowNum=0;
        phoneBill.forEach(item => {
            console.log(phoneBill,"asdfasdfasdfsadfasdfsdfasdfasdfasdfasdfasdfd")
            row +='<tr>';
            row +='<td colspan="4">'+item.title+'</td>';
            row +='<td colspan="1">'+item.price+'</td>';
            row +='<td colspan="1">'+'<input type="number" value='+item.quantity+' onchange="changeMoney(this.value,'+rowNum+','+item.price+')">'+'</td>';
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
        console.log(row,"row...")
    }
}

function removeItem(id){
    console.log("ssssssssssssssss")
    var r=confirm("Are you sure you want to delete this item?")
    if(r==true){
        cart= JSON.parse(sessionStorage.getItem('cart'))
        i=0
        cart.forEach(item => {
            if(item.id==id){
                cart.splice(i,1);
            }
            i++;
        });
        console.log(cart,"111111111111111111111111111")
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

function changeMoney(quantity,rowNumber,price){
    var oldQuantity=phoneBill[rowNumber].quantity
    console.log(quantity,rowNumber,price)
    if(quantity>phoneBill[rowNumber].stock){
        alert("More than stock number");
    }else if(quantity<0){
        alert("Illegal Input!");
    }else{
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
        cart[rowNumber].quantity=parseInt(quantity)
        sessionStorage.setItem("cart",JSON.stringify(cart));
    }
    console.log(phoneBill,"phoneBillChange")

}