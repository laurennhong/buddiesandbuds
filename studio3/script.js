const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const purple = document.querySelector('#purple');
const pink = document.querySelector('#pink');
const black = document.querySelector('#black');
const clear = document.querySelector('#delete');

function setup() {
    const myCanvas = createCanvas(1200,750);
    myCanvas.parent('mySketch');
    background(255);
}

// function click(x) {
//     x.onclick = function() {
//         stroke(x);
//     }
// }

function redclick() {
    red.onclick = function() {
        stroke(255,0,0);
    }
}
    
function draw() {
    stroke(0);
    strokeWeight(16);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    } else if (red.onclick) {
        stroke(255,0,0);
    } 
    // if (click(red)){

    // }
}