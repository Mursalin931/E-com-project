const cartProduct = document.querySelector('.cart-product');
const checkProduct = document.querySelector('.check-product');
const cartImage = document.querySelector('.cart-image');
const cartChecking = document.querySelector('.cart-checking')
const cartCheck = document.querySelector('.cart-check')



const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const quantityNum = document.querySelector('.num-quantity');
const productPrice = document.querySelector('.check-product-price')
const totaPrice = document.querySelector('.total-price');

/**----------------------------- functions variables---------------------------- */

let price = productPrice.innerHTML;
let priceNum = '';
let count = 0;
let count2 = 0;
let lastNumber = 0;


for (let i = 0; i < price.length; i++) {
    if (!isNaN(price[i])) {
        priceNum += price[i]
    }
    if (price[i] === '.') {
        break;
    }
}

//  quantity  Encreement action ------------------------------------

plus.addEventListener('click', function () {
    count = count + 1;
    quantityNum.innerHTML = count;
    count2 = count * +priceNum;
    totaPrice.innerHTML = '$' + count * +priceNum;
    priceNumber(count2)
})

// get the last increement number to click plus action.........

function priceNumber(num) {
    lastNumber = num;
}


// quantity Decreement action--------------------------------

minus.addEventListener('click', function () {
    count = count - 1;
    if (count >= 0) {
        quantityNum.innerHTML = count;
        totaPrice.innerHTML = lastNumber - +priceNum;
        lastNumber = +totaPrice.innerHTML;
        totaPrice.innerHTML = '$' + lastNumber;
    } else {
        count = 0;
    }
})


/**------------------------------quantity-End------------------------ */
let power = true;
cartCheck.addEventListener('click',function(){
    if(power){
        cartChecking.classList.remove('cart-checking');
        console.log('hello')
        power = false;
    }else{
        cartChecking.classList.remove('cart-checking2');
        cartChecking.classList.add('cart-checking');
        power = true;
    }
    
    
})