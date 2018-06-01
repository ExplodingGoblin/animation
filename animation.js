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

var god = document.getElementById('god');
var background = document.getElementById('background');
var cursor = document.getElementById('creps');
var src = document.createAttribute('src');
var src2 = document.createAttribute('src');
var srcboard = document.createAttribute('src');
var weirdclass = document.createAttribute('class');
var bclass = document.createAttribute('class');
var imgclass = document.createAttribute('class');

weirdclass.value = "normalweird";
imgclass.value = "normal";

bclass.value = "normal";
background.setAttributeNode(bclass);
god.setAttributeNode(src);
god.setAttributeNode(weirdclass);
cursor.setAttributeNode(src2);

god.style.height = "2700px";
god.style.width = "2200px";


function update(event) {
    var x = event.clientX - 80;
    var y = event.clientY - 50;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
}

document.addEventListener("mousemove", update);



document.body.onkeydown = function (e) {



    if (e.keyCode === 65) {
        src.value = "pics/Hahahaha.png"
    }

    if (e.keyCode === 87) {
        src.value = "pics/michael_pryor's chin.jpg";
        bclass.value = "quark";
        harry.play();
    }

    if (e.keyCode === 68) {
        src.value = "pics/MARIO.png";
        bclass.value = "death";
    }

    if (e.keyCode === 71) {
        weirdclass.value = "weirdleft";
    }

    if (e.keyCode === 72) {
        weirdclass.value = "weirdright";
    }

    if (e.keyCode === 74) {
        weirdclass.value = "weirddown";
    }
}
