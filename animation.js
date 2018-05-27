var wiiShop = new Audio('sounds/WiiShop.mp3');
wiiShop.play();

var wiiTheme = new Audio('sounds/wiiTheme.mp3');
wiiTheme.play();

var scarceAudio = new Audio('sounds/scarcehere.mp3');

document.getElementById("scarce").onmouseover = function () {
    mouseOver()
};

document.getElementById("scarce").onmouseout = function () {
    mouseOut()
};


function mouseOver() {
    scarceAudio.play();
}

function mouseOut() {
    scarceAudio.pause();
}

var Persona = new Audio('sounds/Persona.mp3');

√
document.getElementById("sans").onmousedown = function () {
    mouseDown()
};

document.getElementById("sans").onmouseup = function () {
    mouseUp()
};


function mouseDown() {
    Persona.play();
}

function mouseUp() {
    Persona.pause();
}
