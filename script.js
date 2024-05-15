const burgerikon = document.getElementById("burgermenu");
const menu = document.getElementById("menu_container");

burgerikon.onclick = visMenubtn;
let viserMenubtn = false;

function visMenubtn() {
    if (viserMenubtn == false) {
        menu.style.display = "block";
        viserMenubtn = true;
    } else {
        menu.style.display = "none";
        viserMenubtn = false;
    }
}

const menubtn = document.querySelectorAll(".menubtn");
const dropdown_booking = document.getElementById("dropdown_booking");
const dropdown_events = document.getElementById("dropdown_events");
const dropdown_menu = document.getElementById("dropdown_menu");
const dropdown_gavekort = document.getElementById("dropdown_gavekort");
//const dropdownIndhold = document.querySelectorAll(".dropdown_indhold a");

let viserDropdownIndhold = false;

dropdown_booking.style.display = "none";
dropdown_events.style.display = "none";
dropdown_menu.style.display = "none";
dropdown_gavekort.style.display = "none";


for (let i = 0; i < menubtn.length; i++) {
    menubtn[0].onclick = visDropdownBooking;
    menubtn[1].onclick = visDropdownEvents;
    menubtn[2].onclick = visDropdownMenu;
    menubtn[3].onclick = visDropdownGavekort;
}

function visDropdownBooking() {
    if (viserDropdownIndhold == false) {
        dropdown_booking.style.display = "block";
        viserDropdownIndhold = true;
    } else {
        dropdown_booking.style.display = "none";
        viserDropdownIndhold = false;
    }
}

function visDropdownEvents() {
    if (viserDropdownIndhold == false) {
        dropdown_events.style.display = "block";
        viserDropdownIndhold = true;
    } else {
        dropdown_events.style.display = "none";
        viserDropdownIndhold = false;
    }
}

function visDropdownMenu() {
    if (viserDropdownIndhold == false) {
        dropdown_menu.style.display = "block";
        viserDropdownIndhold = true;
    } else {
        dropdown_menu.style.display = "none";
        viserDropdownIndhold = false;
    }
}

function visDropdownGavekort() {
    if (viserDropdownIndhold == false) {
        dropdown_gavekort.style.display = "block";
        viserDropdownIndhold = true;
    } else {
        dropdown_gavekort.style.display = "none";
        viserDropdownIndhold = false;
    }
}

/*
function visDropdownIndhold() {
    if (!viserDropdownIndhold == false) {
        dropdown_booking.style.display = "block";
        viserDropdownIndhold = true;
    } else {
        dropdown_booking.style.display = "none";
        viserDropdownIndhold = false;
    }
}
*/
