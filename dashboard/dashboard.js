let container = document.getElementById("productsContainer");
let takeUserOrders = [];
function dataFetching() {
    fetch('https://fakestoreapi.com/products/')
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log(json);
            json.map((each) => {
                let item = `<div id="${each.id}" class="itemContainerEle"">
            <div class="img_wrapper" style="display: flex; align-items: center; justify-content: center; ">
                <img id="rendered_img" src="${each.image}" height="150px" width="100px" alt="">
            </div>
            <h3 class="priceEle">$ ${each.price}</h3>
            <div class="description" style= overflow-y: scroll;">
                <span id ="desc_span">Description: </span>
                <p>  ${each.description} </p>
            </div>
            <button onclick="cartitem(${each.id})" class="buttonEle">Add To Cart</button>
        </div>`
                container.innerHTML += item;
            })
        })

}
dataFetching()

function cartitem(id) {
    let obj = {
        itemId: id,
        quantity: Number(prompt("plz provide quantity"))
    }
    takeUserOrders.push(obj);

    let count = document.getElementById("cartItemsNumber");
    count.textContent = takeUserOrders.length;
}


function foo() {
    localStorage.setItem("takeUserOrder", JSON.stringify(takeUserOrders))
    // console.log(takeUserOrders);
    location.href = "http://127.0.0.1:5500/checkout/checkout.html"
}

