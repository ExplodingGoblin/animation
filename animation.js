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


var scarceAudio = new Audio('sounds/scarcehere.mp3');


var wiiShop = new Audio('sounds/WiiShop.mp3');
wiiShop.play();

var wiiTheme = new Audio('sounds/wiiTheme.mp3');
wiiTheme.play();
