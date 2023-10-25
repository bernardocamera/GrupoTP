const btnLeft = document.querySelector('.btn-left'),
btnRight = document.querySelector('.btn-right'),
slider = document.querySelector('#slider'),
sliderSection = document.querySelectorAll('.slider-section');

console.log(sliderSection);

btnLeft.addEventListener('click', e => moveToLeft());
btnRight.addEventListener('click', e => moveToRight());

let operation = 0;
let widthImg = 100 / sliderSection.length;
let counter = 0;

function moveToRight(){
    if(counter >= sliderSection.length - 1){
        counter = 0;
        operation = 0;
        slider.style.transform = `translate(-${operation}%)`;  
        slider.style.transition = 'none';  
    } else {
        counter ++;
        operation = operation + widthImg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
    }
}

setInterval(() => {
    moveToLeft();
}, 3000);

function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length - 1;
        operation = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
    } else {

        operation = operation - widthImg;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'all ease .6s';
    }
}