// Konstanter for burgermenuikonet og containeren med menupunkterne:
const burgerbtn = document.getElementById("burgermenu");
const menu = document.getElementById("menu_container");

// Event listener for burgermenu:
burgerbtn.onclick = visMenubtn;
let viserMenu = false;

// Event handler med if-sætninger, der viser menupunkterne, hvis de er skjulte,
// og som skjuler dem, hvis de vises, når der trykkes på burgermenuen:
function visMenubtn() {
    if (viserMenu == false) {
        menu.style.display = "block"; // Viser menupunkterne, når det er falsk, at de vises
        viserMenu = true;
    } else {
        menu.style.display = "none"; // Skjuler menupunkterne, når det er sandt, at de vises
        viserMenu = false;
    }
}

// Konstanter for menupunkterne og submenupunkterne:
const menubtn = document.querySelectorAll(".menubtn");
const dropdownIndhold = document.querySelectorAll(".dropdown_indhold");

let viserDropdownIndhold = false;

/* Da der anvendes querySelectorAll, bruges der et for loop
til at fortælle browseren, hvilket DOM-element, den skal have fat i,
(da querySelectorAll returnerer en NodeList, der indeholder alle elementer med class "menubtn" eller "dropdown_indhold"),
så der kun åbnes det ønskede menupunkt, når der trykkes på det, og kun viser de tilhørende submenupunkter.
Desuden anvendes if sætninger til at vise eller skjule submenupunkterne alt afhængigt af,
om det er sandt eller falskt, at de vises*/
for (let i = 0; i < menubtn.length; i++) {
    menubtn[0].onclick = function() { // Event listener og event handler for menupunktet "Book bord"
        if (viserDropdownIndhold == false) {
            for (let i = 0; i < dropdownIndhold.length; i++) { // For loop, der fortæller browseren, hvilket DOM-element, den skal have fat i
                dropdownIndhold[0].style.display = "block"; // Viser submenupunktet
            }
            viserDropdownIndhold = true;
        } else {
            for (let i = 0; i < dropdownIndhold.length; i++) {
                dropdownIndhold[0].style.display = "none"; // Skjuler submenupunktet
            }
            viserDropdownIndhold = false;
        }
    }
    menubtn[1].onclick = function() { // Event listener og event handler for menupunktet "Events"
        if (viserDropdownIndhold == false) {
            for (let i = 0; i < dropdownIndhold.length; i++) { // For loop, der fortæller browseren, hvilket DOM-element, den skal have fat i
                dropdownIndhold[1].style.display = "block"; // Viser submenupunkterne
            }
            viserDropdownIndhold = true;
        } else {
            for (let i = 0; i < dropdownIndhold.length; i++) { 
                dropdownIndhold[1].style.display = "none"; // Skjuler submenupunkterne
            }
            viserDropdownIndhold = false;
        }
    }
    menubtn[2].onclick = function() { // Event listener og event handler for menupunktet "Menu"
        if (viserDropdownIndhold == false) {
            for (let i = 0; i < dropdownIndhold.length; i++) { // For loop, der fortæller browseren, hvilket DOM-element, den skal have fat i
                dropdownIndhold[2].style.display = "block"; // Viser submenupunkterne
            }
            viserDropdownIndhold = true;
        } else {
            for (let i = 0; i < dropdownIndhold.length; i++) {
                dropdownIndhold[2].style.display = "none"; // Skjuler submenupunkterne
            }
            viserDropdownIndhold = false;
        }
    }
    menubtn[3].onclick = function() { // Event listener og event handler for menupunktet "Gavekort"
        if (viserDropdownIndhold == false) {
            for (let i = 0; i < dropdownIndhold.length; i++) { // For loop, der fortæller browseren, hvilket DOM-element, den skal have fat i
                dropdownIndhold[3].style.display = "block"; // Viser submenupunktet
            }
            viserDropdownIndhold = true;
        } else {
            for (let i = 0; i < dropdownIndhold.length; i++) {
                dropdownIndhold[3].style.display = "none"; // Skjuler submenupunktet
            }
            viserDropdownIndhold = false;
        }
    }
}

