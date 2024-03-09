var totalAmount = 0;


function getData() {
    let dataString = localStorage.getItem("takeUserOrder");
    let cartData = JSON.parse(dataString);
    for (let each of cartData) {
        fetch('https://fakestoreapi.com/products/' + each.itemId)
            .then(res => res.json())
            .then((json) => {
                let priceBar = document.getElementById("totalAmount");
                let item =
                    `<div class="cart_product_wrapper" >
                    <div>
                    <img src="${json.image}" height=180px width=250px alt="">
                    </div>
                <div  class="priceBar">
                    <h1 class = "titleEle">product-name:${json.title}</h1>
                    <h1>price: ${json.price} </h1>
                    <div class="quantityBar" >
                        <h1>quantity : </h1>
                        <input class="input_size" style="height: 30px; width: 30px;" type="text" name="" 
                        id="input${json.id}" value = ${each.quantity}>
                    </div>
                </div>
                </div>
                `
                let cartCon = document.getElementById("cartContainer");
                cartCon.innerHTML += item;

                totalAmount = totalAmount + (json.price * each.quantity)
                priceBar.textContent = totalAmount;
            })

    }
}

let pay = document.getElementById("paybutton")
pay.onclick = () => {
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/orderpage/order.html"
    // location.href = "http://127.0.0.1:5500/home/home.html";
}


getData()


