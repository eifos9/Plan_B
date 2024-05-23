// Konstant for billedgalleri:
/* Array.from() putter alle Nodelist-elementerne, der nås med querySelectorAll 
for class = billedgalleri, i et array så de kan styles i for-loopet nedenfor
samt vises og skjules med funktionerne frem() og tilbage(), der med push/shift
og unshift/pop flytter elementerne rundt i arrayet */
const galleribillede = Array.from(document.querySelectorAll(".billedgalleri"));
// Konstanter for frem- og tilbagepile:
const pil_h = document.getElementById("pil_h");
const pil_v = document.getElementById("pil_v");

// For-loop med alle Nodelist-elementerne - galleribillederne:
/* Der skal kun vises et billede ad gangen, så det er kun galleribillede[0], 
der vises, imens resten skjules */
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
}

// Knapper:
// Event listeners for frem- og tilbagepile:
pil_h.onclick = frem;
pil_v.onclick = tilbage;

// Event handler for, når der interageres med pilen til højre:
function frem(){
    galleribillede[0].style.display = "none"; // Skjuler det viste billede
    galleribillede.push(galleribillede[0]); // Putter det første billede-element ind til sidst i arrayet
    galleribillede.shift(); // Fjerner det første billede-element og får det næste billede-elemente til at blive det første
    galleribillede[0].style.display = "block"; // Viser det billede-element, der nu er først
}

// Event handler for, når der interageres med pilen til venstre:
function tilbage(){
    galleribillede[0].style.display = "none"; // Skjuler det viste billede
    galleribillede.unshift(galleribillede[17]); // Putter det sidste billede-element ind først i arrayet
    galleribillede.pop(); // Fjerner det sidste billede-element fra arrayet
    galleribillede[0].style.display = "block"; // Viser det billede-element, der nu er først
}

