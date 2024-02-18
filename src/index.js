

const prev_btn = document.querySelector(".prev_btn_carousal");

console.log("prev button", prev_btn)


Array.from(prev_btn).forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Button Clicked");
    });
});