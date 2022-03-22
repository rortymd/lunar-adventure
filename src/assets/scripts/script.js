// HEADER 

const nav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.header__nav-btn');
navBtn.addEventListener('click', toggleNav);

function toggleNav(event){
    nav.classList.toggle('show-nav');
    navBtn.classList.toggle('is-active');
}