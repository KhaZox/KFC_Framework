/*Part Home*/
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const sliderImage = document.querySelectorAll('.sliders img')
const sliderContainer = document.querySelector('.slider-container')
let autoSlideInterval;
let counter = 0;

function sliderNext() {
    sliderImage[counter].style.animation = 'next1 0.5s ease-in forwards'
    if (counter >= sliderImage.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    sliderImage[counter].style.animation = 'next2 0.5s ease-in forwards'
}
function sliderPrev() {
    sliderImage[counter].style.animation = 'prev1 0.5s ease-in forwards'
    if (counter == 0) {
        counter = sliderImage.length - 1
    }
    else {
        counter--;
    }
    sliderImage[counter].style.animation = 'prev2 0.5s ease-in forwards'
}

function autoSliding() {
    deleInterval = setInterval(timer, 2000)
    function timer() {
        sliderNext()
    }
}
sliderContainer.addEventListener('mouseover', function () {
    clearInterval(deleInterval)
})
sliderContainer.addEventListener('mouseout', autoSliding)
next.addEventListener('click', sliderNext)
prev.addEventListener('click', sliderPrev)
autoSliding()

//Phần show and hidden button cart
const btn_header = document.querySelector('.btn_dathang--header')
const hadleScroll = () => {
    if (window.scrollY >= 20) {
        Object.assign(btn_header.style, {
            opacity: 1,
            PointerEvent: 'auto',
        })
    }
    else {
        Object.assign(btn_header.style, {
            opacity: 0,
            PointerEvent: 'none',
        })
    }
}
window.addEventListener('scroll', hadleScroll)

/*Part Account*/
const wrappermodal = $('.wrapper-menu-modals')
$('.close').click(function () {
    $('.menu-modals').css({ 'display': 'none' })
    $('.menu-modals-inner').css({ 'right': '-350px' })
})

wrappermodal.click(function () {
    $('.menu-modals-inner').css({ 'right': '0' })
    $('.menu-modals').toggle("slow")
})

/*Part Account*/
const inputEmail = $('input[type="email"]')
const inputPassword = $('input[type="password"]')
const messEmail = $('.form-text-email')
const messPassword = $('.form-text-password')
inputEmail.blur(function () {
    //const emailRegex = /^[^\s@@]+@@[^\s@@]+\.[^\s@@]+$/;
    if (inputEmail.val().trim() == "") {
        messEmail.css({ "display": "block" })
    }
    else {
        messEmail.css({ "display": "none" })
    }
})
inputPassword.blur(function () {
    if (inputPassword.val().trim() == "" || inputPassword.val().trim().length < 6) {
        messPassword.css({ "display": "block" })
    }
    else {
        messPassword.css({ "display": "none" })
    }
})