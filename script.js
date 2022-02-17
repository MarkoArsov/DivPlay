
var inter;

function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(){
    var r = randomInt(0,255);
    var g = randomInt(0,255);
    var b = randomInt(0,255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(){
    var div = document.getElementById("myDiv")
    var color = randomColor();
    div.style.backgroundColor = color;
}