
/* -------------------------------------------------------------------------- */
"use strict"

/* -------------------------------------------------------------------------- */

// 🧡 General variable:

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

// -----------------

// ❕ classlist ✨(DOM TOKEN LIST)
// Returns the CSS classnames of an element.
// TODO Syntax: ELEMENT.classlist.METHOD

// ❕ classList.remove() ✨(DOM TOKEN LIST - METHOD)
// Removes one or more tokens from the list
// TODO Syntax: ELEMENT.classlist.remove("SELECTOR");

// ❕ querySelectorAll() ✨(HTML DOM DOCUMENT)
// Target all selector that we want.
// TODO Syntax: document.querySelectorAll("SELECTOR");

/* -------------------------------------------------------------------------- */

// 🧡 Loop all the selector:
// 🧡 execute function when the button is clicked:

// loop the same selector
for ( let i = 0; i < button_open_modal.length; i++) {
    // open modal:
    button_open_modal[i].addEventListener("click", open_modal);
} 
// close modal:
button_close_modal.addEventListener("click", close_modal);
overlay.addEventListener("click", close_modal);

/* -------------------------------------------------------------------------- */

// 🧡 Press ESC keypress to perform the function
// 📝 When we use "keydown", the information about which key was pressed will be stored...
// and the information will be stored in parameter function

document.addEventListener("keydown", function (para_key) {
    // test key function
    console.log(para_key.key);
    // closed modal when ESC key is pressed 
    if (para_key.key === "Escape" && !modal.classList.contains("hidden")) {
        close_modal()
    }
})

// -----------------

// ❕ "keydown" ✨(HTML DOM EVENT - KEYBOARD EVENT)
//  Event occurs when the user is pressing a key (not fired continuously)
// TODO Syntax: ELEMENT..addEventListener("keydown", FUNCTION)

// ❕ key ✨(HTML DOM EVENT - KEYBOARD EVENT - METHOD)
// Returns the input key that was pressed when a key event occured
// TODO Syntax: EVENT.key

// ❕ classList.contain() ✨(DOM TOKEN LIST - METHOD)
// Returns TRUE if a DOMTokenList contains a class, otherwise FALSE
// TODO Syntax:  ELEMENT.classlist.contain("SELECTOR");