// informationsboks ved exoplaneter:
const info = document.getElementById("pin1");
const overlay = document.getElementById("overlay_container_1");
const luk = document.getElementById("overlay_container_1");

// Event listeners
// info knap til jorden2 som viser information om hvad exoplaneter er:
info.onclick = infovin;
// lukker info-boksen igen:
luk.onclick = infovinluk;

// Event handlers
// Viser info-boksen:
function infovin(){
    overlay.style.display = "block";
}
// Skjuler info-boksen:
function infovinluk() {
    overlay.style.display = "none";
}




// antal gavekort

const minusButtons = document.getElementById("minus");
const plusButtons = document.getElementById("plus");
const antal = document.getElementById("antal")[0];

// Da der kun er et antal-element brug [0] for at få det første element

let tal = 0;

// gyudon knap

// Opdaterer det aktuelle antal, der vises:
function opdaterAntal() {
    antal.innerHTML = tal;
  }
  
  // Event listener - minus-knap:
  for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", traekfra);
  }
  
  // Event handler - trækker fra, men ikke mindre end 0:
  function traekfra() {
    if (tal > 0) {
      tal--;
      opdaterAntal();
    }
  }
  // Event listener - plus-knapperne:
  
  for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", laegtil);
  }
  
  // Event handler - lægger til, men ikke mere end 6:
  function laegtil() {
    if (tal < 6) {
      tal++;
      opdaterAntal();
    }
  }