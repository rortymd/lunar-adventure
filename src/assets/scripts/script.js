// HEADER 

const nav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.header__nav-btn');
navBtn.onclick = toggleNav;

function toggleNav() {
    nav.classList.toggle('show-nav');
    navBtn.classList.toggle('is-active');
}

// ABOUT US

let flashlightActive = true;

const aboutUsText = document.querySelector('.aboutus__wrapper');
const flashlight = document.querySelector('.aboutus__flashlight');
const flashlightBtn = flashlight.querySelector('.aboutus__flashlight-btn');

function toggleFlashlight(event) {
    const highlightCondition = event.target.className === 'aboutus__flashlight-img' || event.target.className === 'aboutus__flashlight-btn';

    if (flashlightActive && highlightCondition) {
        flashlightActive = false;
        flashlightBtn.classList.toggle('aboutus__flashlight-btn-active');
        aboutUsText.classList.toggle('aboutus-highlighted');
        setTimeout(() => flashlight.classList.toggle('flashlight-active'), 100);
    }
    else if (!flashlightActive && highlightCondition) {
        flashlightActive = true;
        flashlightBtn.classList.toggle('aboutus__flashlight-btn-active');
        flashlight.classList.toggle('flashlight-active');
        setTimeout(() => aboutUsText.classList.toggle('aboutus-highlighted'), 100);
    }
}

flashlight.onclick = toggleFlashlight;