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