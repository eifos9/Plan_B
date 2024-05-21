const galleribillede = Array.from(document.querySelectorAll(".billedgalleri"));
const pil_h = document.getElementById("pil_h");
const pil_v = document.getElementById("pil_v");

for (let i = 0; i < galleribillede.length; i++) {
    galleribillede[0].style.display = "block";
    galleribillede[1].style.display = "none";
    galleribillede[2].style.display = "none";
    galleribillede[3].style.display = "none";
    galleribillede[4].style.display = "none";
    galleribillede[5].style.display = "none";
    galleribillede[6].style.display = "none";
    galleribillede[7].style.display = "none";
    galleribillede[8].style.display = "none";
    galleribillede[9].style.display = "none";
    galleribillede[10].style.display = "none";
    galleribillede[11].style.display = "none";
    galleribillede[12].style.display = "none";
    galleribillede[13].style.display = "none";
    galleribillede[14].style.display = "none";
    galleribillede[15].style.display = "none";
    galleribillede[16].style.display = "none";
    galleribillede[17].style.display = "none";
    galleribillede[18].style.display = "none";
    galleribillede[19].style.display = "none";
}

pil_h.onclick = frem;
pil_v.onclick = tilbage;

function frem(){
    galleribillede[0].style.display = "none"; // Skjul den viste
    galleribillede.push(galleribillede[0]); // Put den første ind til sidst
    galleribillede.shift(); // Fjern den første og flyt alle en ned
    galleribillede[0].style.display = "block"; // Vis den der nu er først
}

function tilbage(){
    galleribillede[0].style.display = "none";
    galleribillede.unshift(galleribillede[19]);
    galleribillede.pop();
    galleribillede[0].style.display = "block";
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