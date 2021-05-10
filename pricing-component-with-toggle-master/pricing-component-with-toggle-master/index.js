let isAnnually = true;

const checkBox = document.getElementsByClassName("checkbox")[0];
const annually = document.getElementsByClassName("annually");
const monthly = document.getElementsByClassName("monthly");

checkBox.addEventListener("click", () => {
    isAnnually = !isAnnually;

    for (let i = 0; i < annually.length; i++) {
        if (isAnnually) {
            monthly[i].style.display = "none";
            annually[i].style.display = "block";
        }
        else {
            monthly[i].style.display = "block";
            annually[i].style.display = "none";
        }
    }
});