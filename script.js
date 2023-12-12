AOS.init();
// 

window.onscroll = function () { scroll() }
function scroll() {
    var nav = document.getElementById('nav')
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('nav_new')
    } else {
        nav.classList.remove('nav_new')
    }
}

// 

function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        }

    }
});

// 


var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
       
        200: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        576: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        }

    }
});

// 
function month(){
    document.getElementById('demo').innerHTML = "9"
    document.getElementById('demo1').innerHTML = "29"
    document.getElementById('demo2').innerHTML = "49"
}
function yearly(){
    document.getElementById('demo').innerHTML = "29"
    document.getElementById('demo1').innerHTML = "299"
    document.getElementById('demo2').innerHTML = "399"
}