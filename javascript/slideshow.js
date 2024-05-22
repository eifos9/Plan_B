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

