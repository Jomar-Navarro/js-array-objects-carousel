console.log('js-array-objects-carousel');

const itemsWrapper = document.querySelector('.items-wrapper');
const topArrow = document.querySelector('.top');
const downArrow = document.querySelector('.down');
const thumbWrapper = document.querySelector('.thumbnail-wrapper')

let counterImg = 0;

const images = [
  {
    photo: 'assets/img/01.webp',
    title: 'Spider-man Miles Morales',
    text: 'lorem',
  },
  
  {
    photo: 'assets/img/02.webp',
    title: 'Gameplay',
    text: 'lorem',
  },

  {
    photo: 'assets/img/03.webp',
    title: 'Fortinite',
    text: 'lorem',
  },

  {
    photo: 'assets/img/04.webp',
    title: 'Cat',
    text: 'lorem',
  },

  {
    photo: 'assets/img/05.webp',
    title: 'Marvel Avengers',
    text: 'lorem',
  }
];

// ItemsWrapper mi stampa il tag img la le immagini dell'array con le sua apposita classe hide
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  itemsWrapper.innerHTML += `
  <img class="img hide" src="${img}" alt="#">
  `;
  thumbWrapper.innerHTML += `
  <img class="thumb" src="${img}" alt="#">
  `;
}

// Le variabili Hide e active;
const itemsCollector = document.getElementsByClassName('img');
const thumbnailCollector = document.getElementsByClassName('thumb');

// Hide mi rimuove la classe hide nella prima immagine cosí da poterla mostrare;
itemsCollector[counterImg].classList.remove('hide');
// Active mi aggiunge la classe active enfatizzare l'immagine selezionata con le frecce;
thumbnailCollector[counterImg].classList.add('active');


// Freccia in alto
topArrow.addEventListener('click', myImg);

// Freccia in basso
downArrow.addEventListener('click', myImg);

  
// Autoplay delle immagini
const myInterval = setInterval(myImg, 3000);

function myImg() {

  // Mi toglie Active al click della freccia in alto;
  itemsCollector[counterImg].classList.add('hide');

  // Mi toglie Active al click della freccia in alto;
  thumbnailCollector[counterImg].classList.remove('active');
  counterImg++;
  
  // L'immagine quando é minore di 0 del contatore prende l'ultima immagine;
  if (counterImg >= images.length) {
    counterImg = 0;
  }
  
  itemsCollector[counterImg].classList.remove('hide');

  // Mi aggiunge Active al click della freccia in alto;
  thumbnailCollector[counterImg].classList.add('active');
}