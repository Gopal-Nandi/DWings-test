// window.onload

//Nav functionality

// const darjeelingBtn = document.getElementById("darjeeling-btn");
// const mirikBtn = document.getElementById("mirik-btn");
// const kursheongBtn = document.getElementById("kursheong-btn");
// const darjeelingMirikBtn = document.getElementById("darjeeling-mirik-btn");
// const northBengalOffbeatBtn = document.getElementById("north-bengal-offbeat-btn");

// const darjeelingPackage = document.getElementById("darjeeling-package");
// const mirikPackage = document.getElementById("mirik-package");
// const kursheongPackage = document.getElementById("kursheong-package");
// const darjeelingMirikPackage = document.getElementById("darjeeling-mirik-package");
// const northBengalOffbeatPackage = document.getElementById("north-bengal-offbeat-package");

// darjeelingBtn.addEventListener('click', () => {
//     darjeelingPackage.classList.add('darjeeling');
//     mirikPackage.classList.remove('mirik');
//     kursheongPackage.classList.remove('kursheong');
//     darjeelingMirikPackage.classList.remove('darjeeling-mirik');
//     northBengalOffbeatPackage.classList.remove('north-bengal-offbeat');
// });

// mirikBtn.addEventListener('click', () => {
//     darjeelingPackage.classList.remove('darjeeling');
//     mirikPackage.classList.add('mirik');
//     kursheongPackage.classList.remove('kursheong');
//     darjeelingMirikPackage.classList.remove('darjeeling-mirik');
//     northBengalOffbeatPackage.classList.remove('north-bengal-offbeat');
// });

// kursheongBtn.addEventListener('click', () => {
//     darjeelingPackage.classList.remove('darjeeling');
//     mirikPackage.classList.remove('mirik');
//     kursheongPackage.classList.add('kursheong');
//     darjeelingMirikPackage.classList.remove('darjeeling-mirik');
//     northBengalOffbeatPackage.classList.remove('north-bengal-offbeat');
// });

// darjeelingMirikBtn.addEventListener('click', () => {
//     darjeelingPackage.classList.remove('darjeeling');
//     mirikPackage.classList.remove('mirik');
//     kursheongPackage.classList.remove('kursheong');
//     darjeelingMirikPackage.classList.add('darjeeling-mirik');
//     northBengalOffbeatPackage.classList.remove('north-bengal-offbeat');
// });

// northBengalOffbeatBtn.addEventListener('click', () => {
//     darjeelingPackage.classList.remove('darjeeling');
//     mirikPackage.classList.remove('mirik');
//     kursheongPackage.classList.remove('kursheong');
//     darjeelingMirikPackage.classList.remove('darjeeling-mirik');
//     northBengalOffbeatPackage.classList.add('north-bengal-offbeat');
// });

//Scroll shadow

window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const navbarTop = navbar.getBoundingClientRect().top;

    // Check if the navbar's top position is 0 in the viewport

    if (navbarTop === 0) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});


// Increment package cost by 2000 and add after package cost and strike through

const incrementValue = 2000;
const priceElements = document.querySelectorAll(".package-cost");

priceElements.forEach((priceElement) => {
    const originalValueText = priceElement.textContent.trim();
    const originalValue = parseInt(originalValueText.replace(/₹\s?/, ''), 10);
    const newValue = originalValue + incrementValue;

    // Update the ::after content dynamically
    priceElement.style.setProperty("--new-price", `"₹ ${newValue}"`);
});


