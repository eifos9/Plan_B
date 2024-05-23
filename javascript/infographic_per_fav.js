// Konstant for alle de elementer, der skal fade ind og ud:
// Der bruges querySelectorAll til at nå alle elementerne med id = info_per
const info_per = document.querySelectorAll(".cirkel_info, .vertikal_streg_info, .champagne_info_boks, .vertikal_streg_info_2, .info_1, .info_2, .info_3");

// Når der scrolles i vinduet kaldes funktionen fadeIndUd:
window.onscroll = fadeIndUd;

// Event handler:
// Funktionen fadeIndUd:
// If-sætninger, der gør elementerne synlige eller usynlige afhængig af deres placering:
// Overgangen på 2s er lavet i style.css på id = info_per, linje 305-308
function fadeIndUd() {
    let info_pla1 = info_per[0].getBoundingClientRect(); // Første element i Nodelistens position ift. vinduet
    // Får elementet til at fade ud, når den forlader vinduet i bunden.
    if(info_pla1.top >= window.innerHeight - 200) { // -200px for, at man kan se det ske
        info_per[0].style.opacity = "0"; // Første element i Nodelisten styles til at blive usynlig
    }
    // Får elementet til at fade ind, når den kommer ind i vinduet i bunden.
    if(info_pla1.top < window.innerHeight - 200) { // -200px for, at man kan se det ske
        info_per[0].style.opacity = "1"; // Første element i Nodelisten styles til at blive synlig
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