const precedent = document.querySelector(".precedent");
const suivant = document.querySelector(".suivant");
const images = document.querySelectorAll("img");
let nbImages = images.length;

let compteur = 0;
function slideSuivant() {
  images[compteur].classList.remove("active");
  if (compteur < nbImages - 1) {
    compteur++;
  } else {
    compteur = 0;
  }
  images[compteur].classList.add("active");
}
suivant.addEventListener("click", slideSuivant);

function slidePrecedent() {
  images[compteur].classList.remove("active");
  if (compteur > 0) {
    compteur--;
  } else {
    compteur = nbImages - 1;
  }
  images[compteur].classList.add("active");
}
precedent.addEventListener("click", slidePrecedent);
