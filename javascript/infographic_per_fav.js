const info_per = document.querySelectorAll("#info_per");

window.onscroll = fadeIndUd;

function fadeIndUd() {
    let info_pla1 = info_per[0].getBoundingClientRect();
    if(info_pla1.top >= window.innerHeight - 200) {
        info_per[0].style.opacity = "0";
    }
    if(info_pla1.top < window.innerHeight - 200) {
        info_per[0].style.opacity = "1";
    }
    let info_pla2 = info_per[1].getBoundingClientRect();
    if(info_pla2.top >= window.innerHeight - 200) {
        info_per[1].style.opacity = "0";
    }
    if(info_pla2.top < window.innerHeight - 200) {
        info_per[1].style.opacity = "1";
    }
    let info_pla3 = info_per[2].getBoundingClientRect();
    if(info_pla3.top >= window.innerHeight - 200) {
        info_per[2].style.opacity = "0";
    }
    if(info_pla3.top < window.innerHeight - 200) {
        info_per[2].style.opacity = "1";
    }
    let info_pla4 = info_per[3].getBoundingClientRect();
    if(info_pla4.top >= window.innerHeight - 200) {
        info_per[3].style.opacity = "0";
    }
    if(info_pla4.top < window.innerHeight - 200) {
        info_per[3].style.opacity = "1";
    }
    let info_pla5 = info_per[4].getBoundingClientRect();
    if(info_pla5.top >= window.innerHeight - 200) {
        info_per[4].style.opacity = "0";
    }
    if(info_pla5.top < window.innerHeight - 200) {
        info_per[4].style.opacity = "1";
    }
    let info_pla6 = info_per[5].getBoundingClientRect();
    if(info_pla6.top >= window.innerHeight - 200) {
        info_per[5].style.opacity = "0";
    }
    if(info_pla6.top < window.innerHeight - 200) {
        info_per[5].style.opacity = "1";
    }
    let info_pla7 = info_per[6].getBoundingClientRect();
    if(info_pla7.top >= window.innerHeight - 200) {
        info_per[6].style.opacity = "0";
    }
    if(info_pla7.top < window.innerHeight - 200) {
        info_per[6].style.opacity = "1";
    }
    let info_pla8 = info_per[7].getBoundingClientRect();
    if(info_pla8.top >= window.innerHeight - 200) {
        info_per[7].style.opacity = "0";
    }
    if(info_pla8.top < window.innerHeight - 200) {
        info_per[7].style.opacity = "1";
    }
    let info_pla9 = info_per[8].getBoundingClientRect();
    if(info_pla9.top >= window.innerHeight - 200) {
        info_per[8].style.opacity = "0";
    }
    if(info_pla9.top < window.innerHeight - 200) {
        info_per[8].style.opacity = "1";
    }
    let info_pla10 = info_per[9].getBoundingClientRect();
    if(info_pla10.top >= window.innerHeight - 150) {
        info_per[9].style.opacity = "0";
    }
    if(info_pla10.top < window.innerHeight - 200) {
        info_per[9].style.opacity = "1";
    }
    
}