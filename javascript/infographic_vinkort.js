// Informationsboks ved vinkort:
// OBS virker kun for vinen fra USA, for at vise pointen:
const info = document.getElementById("pin1");
const overlay = document.getElementById("overlay_container_1");
const luk = document.getElementById("overlay_container_1");

// Event listeners:
// Pin-knap til infovin, som viser information om vinen fra USA:
info.onclick = infovin;
// lukker info-boksen igen:
luk.onclick = infovinluk;

// Event handlers:
// Viser info-boksen:
function infovin(){
    overlay.style.display = "block";
}

// Skjuler info-boksen:
function infovinluk() {
    overlay.style.display = "none";
}