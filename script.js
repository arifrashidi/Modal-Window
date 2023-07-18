
//* --------------------------------------------------------------------------
"use strict"

//* --------------------------------------------------------------------------
// 🧡 General variables 

// selector variable
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const button_close_modal = document.querySelector(".close-modal")
const button_open_modal = document.querySelectorAll(".show-modal")

// function variable
const close_modal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
const open_modal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

//* --------------------------------------------------------------------------
// 🧡 Window Functionality 
// 1. Loop all the selector.
// 2. Execute function when the button is clicked .

// loop the same selector
for ( let i = 0; i < button_open_modal.length; i++) {
    // open modal:
    button_open_modal[i].addEventListener("click", open_modal);
} 
// close modal:
button_close_modal.addEventListener("click", close_modal);
overlay.addEventListener("click", close_modal);

//* --------------------------------------------------------------------------
// 🧡 Press ESC keypress to perform the function 
// 📝 When we use "keydown", the information about which key was pressed will be stored...
// and the information will be stored in parameter function.

document.addEventListener("keydown", function(para_key) {
    // test key function
    console.log(para_key.key);
    // closed modal when ESC key is pressed 
    if (para_key.key === "Escape" && !modal.classList.contains("hidden")) {
        close_modal()
    }
})

//* --------------------------------------------------------------------------