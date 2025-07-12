let moodbtn = document.querySelector("#btn");
let currentmood = "Light";

moodbtn.addEventListener("click", () => {
    if (currentmood === "Light") {
        currentmood = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currentmood = "Light";
        document.querySelector("body").style.backgroundColor = "white";

    }
})