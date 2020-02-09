
//declarar elementos
const slider: any = document.querySelector('#slider');
const canvas = <HTMLCanvasElement>document.querySelector('#canvas');
//agg eventos al slider
slider.addEventListener('input', handleInputSlider);
const ctx: any = canvas.getContext('2d');
const images: Array<any> = [];
window.addEventListener('load', pageLoaded)

function pageLoaded() {
    for (let index = 1; index <= 30; index++) {
        const number = index.toString().padStart(2, '00');
        const url = `./img/IMG_${number}.jpg`;
        const image = new Image();
        image.src = url;
        image.addEventListener('load', () => {
            images[index] = image;
            if (index === 1) {
                loadImage(index);
            }
        })
        
    }
}

function loadImage(index: number) {
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider(this: any) {
    loadImage(this.value);
}