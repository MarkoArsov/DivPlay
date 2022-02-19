var inter;
var counter = 0;
var isCustom = false;

var prevColor;
var currColor;

function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function loader() {
    var div = document.getElementById("myDiv")
    div.style.backgroundColor = randomColor();
    prevColor = div.style.backgroundColor;

    var customColorInput = document.getElementById("customColorInput")
    var customColorSubmit = document.getElementById("customColorSubmit")
    var xButton = document.getElementById("customX")
    var changeColorType = document.getElementById("changeColorType")

    $(changeColorType).hide()
    $(customColorInput).hide()
    $(customColorSubmit).hide();
    $(xButton).hide();

}

function showPrevColor() {
    var div = document.getElementById("myDiv")
    currColor = div.style.backgroundColor;
    div.style.backgroundColor = prevColor;
}

function showOriginalColor() {
    var div = document.getElementById("myDiv")
    div.style.backgroundColor = currColor;
}

function randomColor() {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor() {
    var changeColorButton = document.getElementById("changeColorButton")
    changeColorButton.disabled = true
    counter = 0;
    prevColor = document.getElementById("myDiv").style.backgroundColor;
    inter = setInterval(intervalColor, 100);
}

function intervalColor() {
    counter++;
    var div = document.getElementById("myDiv")
    div.style.backgroundColor = randomColor();
    if (counter === 9) {
        clearInterval(inter);
        var changeColorButton = document.getElementById("changeColorButton")
        changeColorButton.disabled = false
    }
}

function customColor() {
    var customColorInput = document.getElementById("customColorInput")
    var customColorSubmit = document.getElementById("customColorSubmit")
    var customColorButton = document.getElementById("customColorButton")
    var xButton = document.getElementById("customX")
    var changeColorType = document.getElementById("changeColorType")

    $(customColorInput).show()
    $(customColorSubmit).show();
    $(xButton).show()
    $(changeColorType).show();
    $(customColorButton).hide()
}

function submitCustomColor() {

    var customColor = document.getElementById("customColorInput").value;
    document.getElementById("customColorInput").value = "";
    customColor = customColor.toLowerCase().trim();
    if (customColor === "") return;
    var div = document.getElementById("myDiv")
    prevColor = div.style.backgroundColor;
    div.style.backgroundColor = customColor;
}

function exitCustom() {
    var customColorInput = document.getElementById("customColorInput")
    var customColorSubmit = document.getElementById("customColorSubmit")
    var customColorButton = document.getElementById("customColorButton")
    var changeColorType = document.getElementById("changeColorType")
    var xButton = document.getElementById("customX")

    $(customColorInput).hide()
    $(customColorSubmit).hide()
    $(xButton).hide()
    $(changeColorType).hide();
    $(customColorButton).show()
}

var customColorInputType = true
function changeColorType() {
    var customColorInput = document.getElementById("customColorInput")
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