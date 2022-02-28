var prevColor
var currColor

var prevNumber = "";
var currNumber

var customColorInput
var changeColorTypeButton
var customColorButton
var div
var randomColorButton
var randomNumberButton
var divPar
var moveLeftButton
var moveDownButton

function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function loader() {
    div = document.getElementById("myDiv")
    div.style.backgroundColor = randomColor();
    prevColor = div.style.backgroundColor;

    customColorInput = document.getElementById("customColorInput")

    changeColorTypeButton = document.getElementById("changeColorType")
    customColorButton = document.getElementById("customColorButton")
    randomColorButton = document.getElementById("changeColorButton")
    randomNumberButton = document.getElementById("randomNumberButton")
    divPar = document.getElementById("divPar")
    moveLeftButton = document.getElementById("moveLeft")
    moveDownButton = document.getElementById("moveDown")

    $(changeColorTypeButton).hide()
    $(customColorInput).hide()

}

//============================================================================================

function showPrevColor() {
    currColor = div.style.backgroundColor;
    div.style.backgroundColor = prevColor;

    currNumber = divPar.innerText
    divPar.innerText = prevNumber;

}

function showOriginalColor() {
    div.style.backgroundColor = currColor;
    divPar.innerText = currNumber
}

//============================================================================================

var colorInterval;
var colorInterCounter = 0;

function randomColor() {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor() {
    randomColorButton.disabled = true
    colorInterCounter = 0;
    prevColor = document.getElementById("myDiv").style.backgroundColor;
    colorInterval = setInterval(intervalColor, 100);
}

function intervalColor() {
    colorInterCounter++;
    div.style.backgroundColor = randomColor();
    if (colorInterCounter === 9) {
        clearInterval(colorInterval);
        randomColorButton.disabled = false
    }
}

//============================================================================================

var isCustom = false
var customColorInputType = "text"

function customColor() {
    if (!isCustom) {
        $(customColorInput).show()
        $(changeColorTypeButton).show();
        $(customColorButton).addClass("activeButton")
        isCustom = true;
        return
    }
    $(customColorInput).hide()
    $(changeColorTypeButton).hide()
    $(customColorButton).removeClass("activeButton")
    isCustom = false

}

function isValidColor(customColor) {
    const s = new Option().style;
    s.color = customColor;
    return s.color !== '';
}

function submitCustomColor() {
    var customColor = customColorInput.value
    if (customColorInputType === "text") {
        customColorInput.value = "";
    }
    customColor = customColor.toLowerCase().trim();
    customColor = customColor.replace(/\s+/g, '');
    if (customColor === "" || !isValidColor(customColor)) {
        alert("Not a valid color")
        return;
    }
    prevColor = div.style.backgroundColor;
    div.style.backgroundColor = customColor;
}


function changeColorType() {
    if (customColorInputType === "text") {
        customColorInput.type = "color"
        $(customColorInput).removeClass("customText")
        $(customColorInput).addClass("customColor")


        customColorInputType = "color"
        return
    }
    customColorInput.type = "text"
    $(customColorInput).removeClass("customColor")
    $(customColorInput).addClass("customText")
    customColorInput.value = ""
    customColorInputType = "text"
}

//============================================================================================

var numberInterval
var numberInterCounter = 0

function randomNumber() {
    randomNumberButton.disabled = true;
    numberInterCounter = 0;
    prevNumber = divPar.innerText;
    numberInterval = setInterval(changeNumber, 100)
}

function changeNumber() {
    divPar.innerText = randomInt(0, 999);
    numberInterCounter++;
    if (numberInterCounter === 9) {
        clearInterval(numberInterval)
        randomNumberButton.disabled = false;
    }
}

//============================================================================================
var isLeft = false


function moveLeft() {
    disableMoveButtons()
    if (isLeft) {
        $(div).animate({left: "+=18%"}, 1000)
        isLeft = false
        moveLeftButton.innerText = "Move Left"
        return
    }
    $(div).animate({left: "-=18%"}, 1000)
    isLeft = true
    moveLeftButton.innerText = "Move Right"
}

var isDown = false
function moveDown() {
    disableMoveButtons()
    if (isDown) {
        $(div).animate({top: "-=22%"}, 1000)
        isDown = false
        moveDownButton.innerText = "Move Down"
        return
    }
    $(div).animate({top: "+=22%"}, 1000)
    isDown = true
    moveDownButton.innerText = "Move Up"
}

function disableMoveButtons(){
    moveDownButton.disabled = true
    moveLeftButton.disabled = true
    setTimeout(enableMoveButtons,1000)
}

function enableMoveButtons(){
    moveDownButton.disabled = false
    moveLeftButton.disabled = false
}

//============================================================================================

var isRotating = false
var degree = 0
var timer

function rotate(){
    isRotating = true
    $(div).css({transform: 'rotate(' + degree + 'deg)'});
    degree++;
}

function startRotate(){
    if (!isRotating){
        timer = setInterval(rotate,5)
    }
}

function stopRotate(){
    clearInterval(timer)
    isRotating = false
}