var inter;
var counter = 0;

var prevColor;
var currColor;

function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var customColorInput

var changeColorTypeButton
var customColorButton
var div
var randomColorButton

function loader() {
    div = document.getElementById("myDiv")
    div.style.backgroundColor = randomColor();
    prevColor = div.style.backgroundColor;

    customColorInput = document.getElementById("customColorInput")


    changeColorTypeButton = document.getElementById("changeColorType")
    customColorButton = document.getElementById("customColorButton")
    randomColorButton = document.getElementById("changeColorButton")

    $(changeColorTypeButton).hide()
    $(customColorInput).hide()



}

function showPrevColor() {
    currColor = div.style.backgroundColor;
    div.style.backgroundColor = prevColor;
}

function showOriginalColor() {
    div.style.backgroundColor = currColor;
}

function randomColor() {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor() {
    randomColorButton.disabled = true
    counter = 0;
    prevColor = document.getElementById("myDiv").style.backgroundColor;
    inter = setInterval(intervalColor, 100);
}

function intervalColor() {
    counter++;
    div.style.backgroundColor = randomColor();
    if (counter === 9) {
        clearInterval(inter);
        randomColorButton.disabled = false
    }
}

function customColor() {
    $(customColorInput).show()
    $(changeColorTypeButton).show();
    $(customColorButton).addClass("activeButton")
}

function submitCustomColor() {
    var customColor = customColorInput.value
    customColorInput.value = "";
    customColor = customColor.toLowerCase().trim();
    if (customColor === "") return;
    prevColor = div.style.backgroundColor;
    div.style.backgroundColor = customColor;
}

function exitCustom() {
    $(customColorInput).hide()
    $(changeColorTypeButton).hide();
    $(customColorButton).show()
}

var customColorInputType = true

function changeColorType() {
    if (customColorInputType) {
        customColorInput.type = "color"
        customColorInput.style.width = "240px"
        customColorInput.style.height = "40px"
        customColorInput.style.backgroundColor = "white"
        customColorInputType = false
        return
    }
    customColorInput.type = "input"
    customColorInput.style.width = "216px"
    customColorInput.style.height = ""
    customColorInput.value = ""
    customColorInputType = true
}