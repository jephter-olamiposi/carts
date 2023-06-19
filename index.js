let removeBtn = document.getElementsByClassName('remove-btn');
let number = document.querySelectorAll(".quantity");
let cartItemRemove = document.querySelectorAll('.cart-item')
let up = document.getElementsByClassName("up");
let down = document.getElementsByClassName("down");
let totalAmount = document.querySelector('.total-amount')


//arrow up increament
for (let i = 0; i < up.length; i++) {
    let arrowUp = up[i]
    arrowUp.addEventListener('click', () => {
        let input = number[i]
        let increase = Number(input.innerText) + 1
        input.innerText = increase
        updateCartTotal();
    })

}
//arrow down decreament
for (let i = 0; i < down.length; i++) {
    let arrowDown = down[i]
    arrowDown.addEventListener('click', () => {


        let input = number[i]
        let increase = Number(input.innerText) - 1
        if (increase <= 0) {
            cartItemRemove[i].remove()
            console.log(cartItemRemove[i])
        }
        input.innerText = increase
        updateCartTotal()

    })

}
// remove button
hideitem()
function hideitem() {
    for (let i = 0; i < removeBtn.length; i++) {
        let button = removeBtn[i]
        button.addEventListener('click', removeCartItems)

    }
}

function removeCartItems(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal();

}

// cart update
function updateCartTotal() {
    let cartContainer = document.getElementsByClassName('cart-container')[0]
    let cartItems = cartContainer.getElementsByClassName('cart-item')
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i]
        let itemPrice = cartItem.getElementsByClassName('item-price')[0];
        let itemQuantity = cartItem.getElementsByClassName('quantity')[0];
        let price = parseFloat(itemPrice.innerText.replace('$', ''))
        let quantity = Number(itemQuantity.innerText)
        console.log(price * quantity)

        total = total + (price * quantity)
    }
    let change = cartItems.length
    totalAmount.innerHTML = change
    if (change == 0) {
        empty()
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-price')[0].innerText = '$' + total
}
// clear button
let clear = document.querySelector('.clear-btn')
let cart = document.querySelector('.cart')

clear.addEventListener('click', () => {
    empty()
})

function empty() {
    document.querySelector('.show').innerHTML = `
    <div class="go">
        <h4>YOUR BAG</h4>
        <p>is currently empty</p>
    </div>`;
    cart.remove()
}