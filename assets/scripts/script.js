// HEADER
const header = document.querySelector(".header");

window.onscroll = () => {
    if (window.pageYOffset >= 300) {
        header.classList.add("header-fixed");
        document.body.style.paddingTop = window.getComputedStyle(header).height;
    } else {
        header.classList.remove("header-fixed");
        document.body.style.paddingTop = "0";
    }
};

// NAVIGATION
const nav = document.querySelector(".header__nav");
const navBtn = document.querySelector(".header__nav-btn");
navBtn.onclick = toggleNav;

function toggleNav() {
    nav.classList.toggle("show-nav");
    navBtn.classList.toggle("is-active");
    document.body.classList.toggle("overflow-hidden");
}
// HANDLE LINKS CLICK
document.querySelectorAll(".logo").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.querySelectorAll(".anchor-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        let elOffset = document.querySelector(
            this.getAttribute("href")
        ).offsetTop;
        let headerHeight = parseInt(window.getComputedStyle(header).height);
        let scrollPosition = elOffset - headerHeight;

        window.scrollTo({ top: scrollPosition, behavior: "smooth" });

        if (
            nav.className.includes("show-nav") &&
            navBtn.className.includes("is-active")
        ) {
            document.body.classList.remove("overflow-hidden");
            nav.classList.remove("show-nav");
            navBtn.classList.remove("is-active");
        }
    });
});

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
