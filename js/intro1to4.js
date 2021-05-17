//Demo 2  
/* image toggle script, top line = declaratiom */
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("japan")) {
        image.src = "images/china.jpg";
    } else {
        image.src = "images/japan.jpg";
    }
}

//Demo 3
/* style script */
function myFunction() {
    var x = document.getElementById("demo3");
    x.style.fontSize = "25px";
    x.style.color = "purple";
    x.style.textShadow = "2px 2px 5px red";
}

//Demo 4
function myFunction4() {
    var x, text;

    // gat value of input field
    x = document.getElementById("numb").value;

    // if x is not a number grt than 1 or less than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Invalid input, try again";
    } else {
        text = "Thank you";
    }

    document.getElementById("reply").innerHTML = text;
}
