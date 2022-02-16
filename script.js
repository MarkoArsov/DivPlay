var color = "green";
function changeColor(){
    var div = document.getElementById("myDiv")
    if (color === "green"){
        div.style.backgroundColor = "red"
        color = "red"
        return
    }
    div.style.backgroundColor = "green"
    color = "green"

}