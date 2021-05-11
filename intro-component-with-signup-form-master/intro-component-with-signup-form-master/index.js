const inputFields = document.getElementsByTagName("INPUT");
const myForm = document.getElementById("my-form");
const alertMsg = document.getElementsByClassName("alert-msg");
const errIcon = document.getElementsByClassName("err-icon");

const fieldCheck = (field) => {
    if (field.value === "") {
        return true;
    }
    else {
        return false;
    }
};

myForm.addEventListener("submit", (e) => {
    for (let i = 0; i < inputFields.length; i++) {
        let check = fieldCheck(inputFields[i]);
        if (check === true) {
            errIcon[i].style.display = "block";
            alertMsg[i].style.display = "flex";
            e.preventDefault()
        }
        else {
            errIcon[i].style.display = "none";
            alertMsg[i].style.display = "none";
        }
    }
});
