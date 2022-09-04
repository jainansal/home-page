$(".close-btn")[0].addEventListener("click", togglePopup)

$(".post-div").each((index, element) => {
    element.addEventListener("click", () => {
        togglePopup();
    })
})

$("body")[0].addEventListener("click", (event) => {
    checkThenToggle(event);
})

function togglePopup() {
    $(".popup")[0].classList.toggle("hidden");
}

function checkThenToggle(event) {
    if(!($(".popup")[0].classList.contains("hidden"))) {
        if(event.target.classList.contains("popup")) {
            togglePopup();
        }
    }
}