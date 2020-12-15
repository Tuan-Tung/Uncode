const header = document.querySelector('.header');
window.addEventListener('scroll', () =>{
    const scrollY = window.scrollY;
    if(scrollY>150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
})

$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:100,
    // nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
const header__button = document.querySelector('#click');
const navbar__menu = document.querySelector('.navbar__menu');
header__button.addEventListener('click', () =>{
    navbar__menu.classList.toggle('in--out');
})

const Scroll = document.querySelector('.scroll');
Scroll.addEventListener('click' , () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    })

    
})