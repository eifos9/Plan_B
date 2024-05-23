// Konstanter for pins og overlays:
const info = document.querySelectorAll("#pin1, #pin2, #pin3, #pin4, #pin5, #pin6, #pin7, #pin8, #pin9");
const overlay = document.querySelectorAll("#overlay_container_1");

let viserOverlay = false;

// Samme princip som burgermenu:
for (let i = 0; i < info.length; i++) {
    info[0].onclick = function() { // Event listener og event handler for det første overlay
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { // For loop, der fortæller browseren, hvilket DOM-element, den skal have fat i
                overlay[0].style.display = "block"; // Viser overlay
            }
            viserOverlay = true;
        }
    overlay[0].onclick = function() { // Event listener og event handler for det første overlay
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { // For loop, der fortæller browseren, hvilket DOM-element, den skal have fat i
                overlay[0].style.display = "none"; // Skjuler overlay
            }
            viserOverlay = false;
        }
        }
    }
    info[1].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[1].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[1].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[1].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }

    info[2].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[2].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[2].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[2].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }

    info[3].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[3].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[3].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[3].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }

    info[4].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[4].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[4].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[4].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }

    info[5].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[5].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[5].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[5].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }

    info[6].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[6].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[6].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[6].style.display = "none";
            }
            viserOverlay = false;
        }
        }
    }

    info[7].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[7].style.display = "block"; 
            }
            viserOverlay = true;
        }
    overlay[7].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[7].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }

    info[8].onclick = function() { 
        if (viserOverlay == false) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[8].style.display = "block";
            }
            viserOverlay = true;
        }
    overlay[8].onclick = function() { 
        if (viserOverlay == true) {
            for (let i = 0; i < overlay.length; i++) { 
                overlay[8].style.display = "none"; 
            }
            viserOverlay = false;
        }
        }
    }
        
}