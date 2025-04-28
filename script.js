const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitbtn = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
let bool = false;




let checkFunction = rates.forEach(rate => {

    rate.addEventListener("click", () => {
        rating.innerText = rate.innerText;
        bool = true;
    })

})



submitbtn.addEventListener("click", () => {
    if (bool) {
        thanksContainer.classList.remove("hidden");
        mainContainer.classList.add("hidden");
    }
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    rating.innerHTML = "NONE"
    bool = false;
    checkFunction();

})

