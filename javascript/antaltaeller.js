// antal gavekort

const minusButtons = document.getElementById("minus");
const plusButtons = document.getElementById("plus");
const antal = document.getElementById("antal");

// Da der kun er et antal-element brug [0] for at få det første element

let tal = 0;

// gyudon knap

// Opdaterer det aktuelle antal, der vises:
function opdaterAntal() {
    antal.innerHTML = tal;
  }
  
  // Event listener - minus-knap:
  minusButtons.onclick = traekfra;
  
  // Event handler - trækker fra, men ikke mindre end 0:
  function traekfra() {
    if (tal > 0) {
      tal--;
      opdaterAntal();
    }
  }
  // Event listener - plus-knapperne:
  
  plusButtons.onclick = laegtil;
  
  // Event handler - lægger til, men ikke mere end 6:
  function laegtil() {
    if (tal < Infinity) {
      tal++;
      opdaterAntal();
    }
    
  }