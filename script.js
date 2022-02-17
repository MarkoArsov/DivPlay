
var inter;
var counter = 0;

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
    var changeColorButton = document.getElementById("changeColorButton")
    changeColorButton.disabled = true
    counter = 0;
    inter = setInterval(intervalColor,100);
}

function intervalColor(){
    counter++;
    var div = document.getElementById("myDiv")
    div.style.backgroundColor = randomColor();
    if (counter === 9) {
        clearInterval(inter);
        var changeColorButton = document.getElementById("changeColorButton")
        changeColorButton.disabled = false
    }
}