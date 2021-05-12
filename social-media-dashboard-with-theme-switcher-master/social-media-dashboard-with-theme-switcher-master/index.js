const body = document.body;
const navbar = document.getElementById("navbar");
const toggleSwitch = document.getElementById("switch");
const checkBox = document.getElementById("checkbox");
const followersSection = document.getElementById("followers");
const overviewSection = document.getElementById("overview-section");

let isLight = true;

checkBox.addEventListener("click", () => {
    isLight = !isLight;

    if (!isLight) {
        body.classList.add("dark-body")
        navbar.classList.add("dark-nav");
        toggleSwitch.classList.add("dark-switch");
        followersSection.classList.add("dark-fc");
        overviewSection.classList.add("dark-oc");
    }
    else {
        body.classList.remove("dark-body");
        navbar.classList.remove("dark-nav");
        toggleSwitch.classList.remove("dark-switch");
        followersSection.classList.remove("dark-fc");
        overviewSection.classList.remove("dark-oc");
    }
});