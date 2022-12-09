/* const clientWidth = document.body.clientWidth;
const clientHeight = document.body.clientHeight;
const image = document.querySelector('#background-image');

fetch(`https://picsum.photos/${clientWidth}/${clientHeight}`)
    .then((data) => image.setAttribute('src', data.url)); */

const images = [
    'Aryanorb.png'
    ,'AryanorbLibrary.png'
    ,'Beatrice.jpg'
    ,'JourneysEndVER.ela.jpg'
    ,'Kayangel.png'
    ,'Ninave.jpg'
    ,'NinaveWings.jpg'
    ,'NinaveWingsVER.ela.jpg'
    ,'RidingWhaleToStorm.jpg'
    ,'TheTemple.jpg'
    ,'WaterFall.png'
    ,'WhaleVER.ela.jpg'
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement('img');
bgImage.src = `images/${chosenImage}`;
bgImage.width = document.body.clientWidth;

document.body.appendChild(bgImage);