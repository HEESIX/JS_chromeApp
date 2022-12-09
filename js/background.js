const clientWidth = document.body.clientWidth;
const clientHeight = document.body.clientHeight;
const image = document.querySelector('#background-image');

fetch(`https://picsum.photos/${clientWidth}/${clientHeight}`)
    .then((data) => image.setAttribute('src', data.url));

