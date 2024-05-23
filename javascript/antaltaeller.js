// Antal gavekort:
// Konstanter for plus- og minus-knap samt for området, som antallet skal puttes ind i:
const minusButtons = document.getElementById("minus");
const plusButtons = document.getElementById("plus");
const antal = document.getElementById("antal");

let tal_nu = 0;

// Opdaterer antal gavekort i HTML:
function opdaterAntal() {
    antal.innerHTML = tal_nu;
  }
  
// Event listener - minus-knap:
minusButtons.onclick = traekfra;
  
// Event handler - trækker fra antal, men ikke mindre end 0:
  function traekfra() {
    if (tal_nu > 0) {
      tal_nu--;
      opdaterAntal();
    }
  }

// Event listener - plus-knap:
  plusButtons.onclick = laegtil;
  
// Event handler - lægger til (til uendeligt antal):
  function laegtil() {
    if (tal_nu < Infinity) {
      tal_nu++;
      opdaterAntal();
    }
    
  }