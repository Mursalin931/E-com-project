
// https://preview.colorlib.com/#ashion
const header = document.querySelector('.navbar')
window.addEventListener('scroll', function () {
    header.classList.toggle('color', window.scrollY > 0);
    header.style.transition = '.5s';
})

//**----------------------NavBar start------------------------*/



/**---------------Hamburger------------------- */
const hamburger = document.querySelector('.hamburger');
const NavBar = document.querySelector('.menu')
hamburger.addEventListener('click', navbarHandler);
function navbarHandler() {
    NavBar.classList.toggle('display-menu')
}

/** ----------------------  NavBar End------------------ */

/** -----------------------Banner Slide Action start -------------------- */

const imageRacks = document.querySelectorAll('.image-slide');
setInterval(timing, 5000)
let index = 0;
function timing() {
    imageRacks[index].classList.remove('active');
    index = (index + 1) % imageRacks.length;
    imageRacks[index].classList.add('active')
}

/** -------------------Banner Ttle action--------------------- */

const bnTitle = document.querySelector('.banner-title');
let cngTitle = '100% FRESH AND ORGANIC FOOD.';
let y = bnTitle.innerHTML;
let x = true;
setInterval(cnz, 5000);
function cnz() {
    if (x) {
        bnTitle.innerHTML = cngTitle;
        x = false;
    } else {
        bnTitle.innerHTML = y;
        x = true;
    }
}

/**------------------Banner title action End--------------------- */

/**-------------------Image Title Action --------------------------- */

// const title = document.querySelectorAll('.of');
// let tColor = true;

// function colorChange() {
//     if (tColor) {
//         title[0].style.color = "red";
//         title[1].style.color = "red";
//         tColor = false;

//     } else {
//         title[0].style.color = "blue";
//         title[1].style.color = "blue";
//         tColor = true;

//     }

// }
// setInterval(colorChange, 300)

/**---------------------Product Slider action------------------------ */

const productCard = document.querySelector('.product-card');
const productCard2 = document.querySelector('.product-card2');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const nextBtn1 = document.querySelector('.next1');
const prevBtn1 = document.querySelector('.prev1');
const next_prev = document.querySelector('.next-prev');
const next_prev2 = document.querySelector('.next-prev2');

prevBtn.addEventListener('click',function(){
    productCard.scrollLeft -= 125;
    console.log(productCard.scrollLeft);
})
nextBtn.addEventListener('click',function(){
    productCard.scrollLeft += 125;
    console.log(productCard.scrollLeft);
})
prevBtn1.addEventListener('click',function(){
    productCard2.scrollLeft -= 125;
    console.log(productCard2.scrollLeft);
})
nextBtn1.addEventListener('click',function(){
    productCard2.scrollLeft += 125;
    console.log(productCard2.scrollLeft);
})

/**------------------------slide autoplay action --------------- */

let maxScrollLeft = productCard.scrollWidth - productCard.clientWidth;

function autoPlay(){
    if(productCard.scrollLeft > (maxScrollLeft - 1)){
        productCard.scrollLeft -= maxScrollLeft;
    }else{
        productCard.scrollLeft += 1;
    }
}

let auto = setInterval(autoPlay,30)




let maxScrollLeft2 = productCard2.scrollWidth - productCard2.clientWidth;

function autoPlay2(){
    if(productCard2.scrollLeft > (maxScrollLeft - 1)){
        productCard2.scrollLeft -= maxScrollLeft;
    }else{
        productCard2.scrollLeft += 1;
    }
}


let auto2 = setInterval(autoPlay2,30)

productCard.addEventListener('mouseenter',function(){
    clearInterval(auto);
})
productCard.addEventListener('mouseleave',function(){
    auto = setInterval(autoPlay,30);
})


productCard2.addEventListener('mouseenter',function(){
    clearInterval(auto2);
})
productCard2.addEventListener('mouseleave',function(){
    auto2 = setInterval(autoPlay2,30);
})



next_prev.addEventListener('mouseenter',function(){
    clearInterval(auto);
})
next_prev.addEventListener('mouseleave',function(){
    auto = setInterval(autoPlay,30);
});

next_prev2.addEventListener('mouseenter',function(){
    clearInterval(auto2);
})
next_prev2.addEventListener('mouseleave',function(){
    auto2 = setInterval(autoPlay2,30);
});

/**---------------------Product Slider End------------------------ */


/**----------------------customer-feedback-slider-------------- */
const customerSlide = document.querySelectorAll('.slide-thumb');
const cPrev = document.querySelector('.slide-prev');
const cNext = document.querySelector('.slide-next');
setInterval(customsSlide,5000)
let slideIndex = 0;
function customsSlide(){
    customerSlide[slideIndex].classList.remove('active1');
    slideIndex = (index + 1) % customerSlide.length;
    customerSlide[slideIndex].classList.add('active1'); 
}







