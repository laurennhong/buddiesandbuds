const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const purple = document.querySelector('#purple');
const pink = document.querySelector('#pink');
const black = document.querySelector('#black');
const clear = document.querySelector('#delete');
let strokeR = 0;
let strokeG = 0;
let strokeB = 0;

function setup() {
    const myCanvas = createCanvas(850,500);
    myCanvas.parent('mySketch');
    background(255);
}

red.addEventListener('click',function(){
    strokeR = 255;
    strokeG = 0;
    strokeB = 0;
});

orange.addEventListener('click',function(){
    strokeR = 255;
    strokeG = 165;
    strokeB = 0;
});

yellow.addEventListener('click',function(){
    strokeR = 255;
    strokeG = 255;
    strokeB = 0;
});

green.addEventListener('click',function(){
    strokeR = 0;
    strokeG = 128;
    strokeB = 0;
});

blue.addEventListener('click',function(){
    strokeR = 0;
    strokeG = 0;
    strokeB = 255;
});

purple.addEventListener('click',function(){
    strokeR = 128;
    strokeG = 0;
    strokeB = 128;
});

pink.addEventListener('click',function(){
    strokeR = 255;
    strokeG = 192;
    strokeB = 203;
});

black.addEventListener('click',function(){
    strokeR = 0;
    strokeG = 0;
    strokeB = 0;
});

function draw() {
    stroke(strokeR, strokeG, strokeB);
    strokeWeight(16);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    } 
    clear.addEventListener('click', function(){
        setup();
    })
}