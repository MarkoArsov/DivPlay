var prevColor
var currColor
var prevNumber = "";
var currNumber

var title
var div
var divPar
var freePlayButton
var randomColorButton
var customColorButton
var customColorInput
var changeColorTypeButton
var randomNumberButton
var moveLeftButton
var moveDownButton
var rotateButton
var borderRadiusButton
var borderRadiusSlider
var resetButton


function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function loader() {
    title = document.getElementById("title")
    div = document.getElementById("myDiv")
    divPar = document.getElementById("divPar")
    freePlayButton = document.getElementById("freePlayButton")
    randomColorButton = document.getElementById("changeColorButton")
    customColorButton = document.getElementById("customColorButton")
    customColorInput = document.getElementById("customColorInput")
    changeColorTypeButton = document.getElementById("changeColorType")
    randomNumberButton = document.getElementById("randomNumberButton")
    moveLeftButton = document.getElementById("moveLeft")
    moveDownButton = document.getElementById("moveDown")
    rotateButton = document.getElementById("rotateButton")
    borderRadiusButton = document.getElementById("borderRadius")
    borderRadiusSlider = document.getElementById("borderRadiusSlider")
    resetButton = document.getElementById("resetButton")

    div.style.backgroundColor = randomColor();
    prevColor = div.style.backgroundColor;
    $(changeColorTypeButton).hide()
    $(customColorInput).hide()
    $(borderRadiusSlider).hide()

    changeColorType()
    changeColorType()
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
var customColorInputType = "color"

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
    resetEnable()
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
    resetEnable()
    disableMoveButtons()
    if (isLeft) {
        $(div).animate({left: "+=19%"}, 1000)
        isLeft = false
        moveLeftButton.innerText = "Move Left"
        return
    }
    $(div).animate({left: "-=19%"}, 1000)
    isLeft = true
    moveLeftButton.innerText = "Move Right"
}

var isDown = false

function moveDown() {
    resetEnable()
    disableMoveButtons()
    if (isDown) {
        $(div).animate({top: "-=28%"}, 1000)
        isDown = false
        moveDownButton.innerText = "Move Down"
        return
    }
    $(div).animate({top: "+=28%"}, 1000)
    isDown = true
    moveDownButton.innerText = "Move Up"
}

function disableMoveButtons() {
    moveDownButton.disabled = true
    moveLeftButton.disabled = true
    setTimeout(enableMoveButtons, 1000)
}

function enableMoveButtons() {
    moveDownButton.disabled = false
    moveLeftButton.disabled = false
}

//============================================================================================

var isRotating = false
var degree = 0
var timer

function rotate() {
    isRotating = true
    $(div).css({transform: 'rotate(' + degree + 'deg)'});
    degree++;
}

function rotateDiv() {
    resetEnable()
    if (!isRotating) {
        timer = setInterval(rotate, 5)
        $(rotateButton).addClass("activeButton")
        rotateButton.innerText = "Stop Rotating"
        return
    }
    clearInterval(timer)
    $(rotateButton).removeClass("activeButton")
    rotateButton.innerText = "Start Rotating"
    isRotating = false
}

//============================================================================================

function resetEnable() {
    $(resetButton).addClass("activeButton")
}

function reset() {
    location.reload()
}

//============================================================================================

function titleColorEnable() {
    title.style.color = div.style.backgroundColor
}

function titleColorDisable() {
    title.style.color = "#D4B996FF"
}

//============================================================================================

var isEnabled = false

function enableBorderRadius() {
    if (!isEnabled) {
        $(borderRadiusButton).addClass("activeButton")
        $(borderRadiusSlider).show()
        isEnabled = true
        return
    }
    $(borderRadiusButton).removeClass("activeButton")
    $(borderRadiusSlider).hide()
    isEnabled = false

}

function updateBorderRadius() {
    var per = borderRadiusSlider.value
    div.style.borderRadius = "" + per + "%"
    resetEnable()
}

//============================================================================================

function freePlayButtonHover() {
    freePlayButton.style.backgroundColor = div.backgroundColor;
    freePlayButton.style.borderColor = div.backgroundColor;
    freePlayButton.style.color = "white";
}

function freePlatButtonBack() {
    freePlayButton.style.backgroundColor = "#A07855FF";
    freePlayButton.style.borderColor = "#A07855FF";
    freePlayButton.style.color = "#D4B996FF";
}

//============================================================================================