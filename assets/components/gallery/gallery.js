const setupDotBtns = (dotsArray, embla) => {
    dotsArray.forEach((dotNode, i) => {
        dotNode.addEventListener("click", () => embla.scrollTo(i), false);
    });
};

const generateDotBtns = (dots, embla) => {
    const template = document.getElementById("embla-dot-template").innerHTML;
    dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, "");
    return [].slice.call(dots.querySelectorAll(".embla__dot"));
};

const selectDotBtn = (dotsArray, embla) => () => {
    const previous = embla.previousScrollSnap();
    const selected = embla.selectedScrollSnap();
    dotsArray[previous].classList.remove("is-selected");
    dotsArray[selected].classList.add("is-selected");
};

const rootNode = document.querySelector(".embla");
const viewportNode = rootNode.querySelector(".embla__viewport");

const options = { loop: false };
const plugins = []; // Plugins

const prevButtonNode = rootNode.querySelector(".embla__prev");
const nextButtonNode = rootNode.querySelector(".embla__next");

const dots = document.querySelector(".embla__dots");

const embla = EmblaCarousel(viewportNode, options, plugins);

const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
setupDotBtns(dotsArray, embla);

prevButtonNode.addEventListener("click", embla.scrollPrev, false);
prevButtonNode.addEventListener(
    "mousedown",
    () => (prevButtonNode.style.transform = "scale(0.9) translateY(-50%)")
);
prevButtonNode.addEventListener(
    "mouseup",
    () => (prevButtonNode.style.transform = "scale(1) translateY(-50%)")
);

nextButtonNode.addEventListener("click", embla.scrollNext, false);
nextButtonNode.addEventListener(
    "mousedown",
    () => (nextButtonNode.style.transform = "scale(0.9) translateY(-50%)")
);
nextButtonNode.addEventListener(
    "mouseup",
    () => (nextButtonNode.style.transform = "scale(1) translateY(-50%)")
);

embla.on("select", setSelectedDotBtn);
embla.on("init", setSelectedDotBtn);
