const info_per = document.querySelectorAll("#info_per");

window.onscroll = fadeIndUd;

let info_list = 0;

function fadeIndUd() {
    let info_pla1 = info_per[0].getBoundingClientRect();
    if(info_pla1.top >= window.innerHeight - 200) {
        info_per[0].style.opacity = "0";
    }
    if(info_pla1.top < window.innerHeight - 150) {
        info_per[0].style.opacity = "1";
    }
    let info_pla2 = info_per[1].getBoundingClientRect();
    if(info_pla2.top >= window.innerHeight - 200) {
        info_per[1].style.opacity = "0";
    }
    if(info_pla2.top < window.innerHeight - 150) {
        info_per[1].style.opacity = "1";
    }
    let info_pla3 = info_per[2].getBoundingClientRect();
    if(info_pla3.top >= window.innerHeight - 150) {
        info_per[2].style.opacity = "0";
    }
    if(info_pla3.top < window.innerHeight - 150) {
        info_per[2].style.opacity = "1";
    }
    let info_pla4 = info_per[3].getBoundingClientRect();
    if(info_pla4.top >= window.innerHeight - 150) {
        info_per[3].style.opacity = "0";
    }
    if(info_pla4.top < window.innerHeight - 150) {
        info_per[3].style.opacity = "1";
    }
    let info_pla5 = info_per[4].getBoundingClientRect();
    if(info_pla5.top >= window.innerHeight - 150) {
        info_per[4].style.opacity = "0";
    }
    if(info_pla5.top < window.innerHeight - 150) {
        info_per[4].style.opacity = "1";
    }
    let info_pla6 = info_per[5].getBoundingClientRect();
    if(info_pla6.top >= window.innerHeight - 150) {
        info_per[5].style.opacity = "0";
    }
    if(info_pla6.top < window.innerHeight - 150) {
        info_per[5].style.opacity = "1";
    }
    let info_pla7 = info_per[6].getBoundingClientRect();
    if(info_pla7.top >= window.innerHeight - 150) {
        info_per[6].style.opacity = "0";
    }
    if(info_pla7.top < window.innerHeight - 150) {
        info_per[6].style.opacity = "1";
    }
    
}




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



