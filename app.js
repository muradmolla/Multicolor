//change aria current too
function changeTabTo(targetIndex) {
    handleChangeSections(targetIndex);
    handleChangeNavigation(targetIndex);
    window.currentTab = targetIndex;
    resizeTabWrapper();
}

function handleChangeNavigation(targetIndex) { 
    const parent = document.querySelector(".navbar-nav");
    const children = parent.children;
   for (let i = 0; i < children.length; i++) {
        //Clearing classes
        const child = children[i];
        const childIndex = child.getAttribute("data-nav-index");
        child.classList.remove("active");
        if (childIndex == targetIndex)
            child.classList.add("active");
    }
}

function handleChangeSections(targetIndex) {
    const parent = document.querySelector(".slider__wrapper");
    const children = parent.children;

    for (let i = 0; i < children.length; i++) {
        //Clearing classes
        const child = children[i];
        const childIndex = child.getAttribute("data-tab-index");
        child.classList.remove("active", "slide-right");
        let classToBeAdded = "";
        if (childIndex == targetIndex) {
            classToBeAdded = "active"
        };
        if (childIndex > targetIndex) classToBeAdded = "slide-right";

        if (classToBeAdded !== "") child.classList.add(classToBeAdded);
    }
}


//fix wrapper height
function resizeTabWrapper() {
    const parent = document.querySelector(".slider__wrapper");
    const children = document.querySelector(".slider__wrapper > .active");
    parent.style.height = children.offsetHeight + "px";
}

addEventListener('resize', (event) => resizeTabWrapper());

window.currentTab = 0;
changeTabTo(0);