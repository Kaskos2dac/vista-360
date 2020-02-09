"use strict";
//declarar elementos
const slider = document.querySelector('#slider');
const canvas = document.querySelector('#canvas');
//agg eventos al slider
slider.addEventListener('input', handleInputSlider);
const ctx = canvas.getContext('2d');
const images = [];
window.addEventListener('load', pageLoaded);
function pageLoaded() {
    for (let index = 1; index <= 15; index++) {
        const number = index.toString().padStart(2, '00');
        const url = `./img/IMG_${number}.jpg`;
        const image = new Image();
        image.src = url;
        image.addEventListener('load', () => {
            images[index] = image;
            if (index === 1) {
                loadImage(index);
            }
        });
    }
}
function loadImage(index) {
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}
function handleInputSlider() {
    loadImage(this.value);
}
