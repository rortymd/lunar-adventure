// HEADER
const nav = document.querySelector(".header__nav");
const navBtn = document.querySelector(".header__nav-btn");
navBtn.onclick = toggleNav;

function toggleNav() {
    nav.classList.toggle("show-nav");
    navBtn.classList.toggle("is-active");
}

// ABOUT US
let flashlightActive = true;

const aboutUsText = document.querySelector(".aboutus__wrapper");
const flashlight = document.querySelector(".aboutus__flashlight");
const flashlightBtn = flashlight.querySelector(".aboutus__flashlight-btn");

function toggleFlashlight(event) {
    const highlightCondition =
        event.target.className === "aboutus__flashlight-img" ||
        event.target.className === "aboutus__flashlight-btn";

    if (flashlightActive && highlightCondition) {
        flashlightActive = false;
        flashlightBtn.classList.toggle("aboutus__flashlight-btn-active");
        aboutUsText.classList.toggle("aboutus-highlighted");
        setTimeout(() => flashlight.classList.toggle("flashlight-active"), 100);
    } else if (!flashlightActive && highlightCondition) {
        flashlightActive = true;
        flashlightBtn.classList.toggle("aboutus__flashlight-btn-active");
        flashlight.classList.toggle("flashlight-active");
        setTimeout(
            () => aboutUsText.classList.toggle("aboutus-highlighted"),
            100
        );
    }
}

flashlight.onclick = toggleFlashlight;

// BUY A TICKET FORM
const callMeNotification = document.querySelector("#call__notification");
const ticketsForm = document.querySelector(".tickets__form");

function sendCallRequest(event) {
    event.preventDefault();
    callMeNotification.style.animationName = "showNotification";
}

ticketsForm.onsubmit = sendCallRequest;

// ACCORDION

const accordionItem = document.querySelectorAll(".accordion__item");
const accordionBtn = document.querySelectorAll(".accordion__item-title");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].onclick = function () {
        for (let k = 0; k < accordionItem.length; k++) {
            if (k !== i) {
                accordionItem[k].classList.remove("active");
            }
        }
        accordionItem[i].classList.toggle("active");
    };
}

// Q&A FORM

const questionsForm = document.querySelector(".questions__form");

questionsForm.onsubmit = sendCallRequest;

// SUBSCRIBE NEWSLETTER

const subscribeInput = document.querySelector(".social__subscribe-input");
const subscribeSubmit = document.querySelector(".social__subscribe-submit");
const subscribeNotification = document.querySelector(
    "#subscribe__notification"
);

function subscribeNewsletter(input) {
    input.value = input.value.trim();
    if (input.value !== "") {
        subscribeNotification.style.animationName = "showNotification";
    }
}

subscribeSubmit.onclick = () => subscribeNewsletter(subscribeInput);