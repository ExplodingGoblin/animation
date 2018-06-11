var lord = document.getElementById('lord');
var background = document.getElementById('background');
var cursor = document.getElementById('mouse');
var src = document.createAttribute('src');
var src2 = document.createAttribute('src');
var srcboard = document.createAttribute('src');
var weirdclass = document.createAttribute('class');
var bclass = document.createAttribute('class');
var imgclass = document.createAttribute('class');
weirdclass.value = "normalweird";
src.value = "pictures/weird_guy_staring.jpeg";
src2.value = "pictures/guy_staring.jpg";
imgclass.value = "normal";

bclass.value = "normal";
background.setAttributeNode(bclass);
lord.setAttributeNode(src);
lord.setAttributeNode(weirdclass);
cursor.setAttributeNode(src2);

lord.style.height = "2700px";
lord.style.width = "2200px";

var Persona = new Audio('sounds/Persona.mp3');
var ESM = new Audio('sounds/ESM.mp3');
var MHAOP3 = new Audio('sounds/MHOP3.mp3');

function update(event) {
    var x = event.clientX - 80;
    var y = event.clientY - 50;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
}

document.addEventListener("mousemove", update);



document.body.onmousedown = function () {

    bclass.value = "evil";
    src2.value = "pictures/weird_guy_staring_evil.jpg";
}
document.body.onmouseup = function () {

    bclass.value = "normal";
    src2.value = "pictures/guy_staring.jpg";
}
document.body.onkeyup = function () {
    bclass.value = "normal";
    MHOP3.pause();
    ESM.pause();
    src.value = "pictures/weird_guy_staring.jpeg";
    lord.style.height = "2700px";
    lord.style.width = "2200px";
    src2.value = "pictures/Chris.jpg";
    weirdclass.value = "normalweird";
}

document.body.onkeydown = function (e) {

    if (e.keyCode === 27) {
        bclass.value = "youcant";
    }
    if (e.keyCode === 67) {
        bclass.value = "wheezer";
        src.value = "pictures/Roblox.png";
        src2.value = "pictures/BaldMan.jpg";
        MHAOP3.play();
    }
    if (e.keyCode === 68) {
        bclass.value = "me";
    }
    if (e.keyCode === 83) {

        src.value = "pictures/Owl.jpg"
    }
    if (e.keyCode === 88) {

        src.value = "pictures/DeadpoolTime.jpg";
    }
    if (e.keyCode === 65) {
        bclass.value = "duckman";
    }
    if (e.keyCode === 81) {
        bclass.value = "windows";
        src.value = "pictures/photoshopPic.png";
    }
    if (e.keyCode === 90) {
        bclass.value = "mario";

    }
    if (e.keyCode === 87) {
        src.value = "pictures/Sans.png";
        bclass.value = "quark";
        ESM.play();
    }
    if (e.keyCode === 69) {
        src.value = "pictures/Loss.png";
        bclass.value = "death";
    }
    if (e.keyCode === 38) {
        weirdclass.value = "weirdup";
    }
    if (e.keyCode === 37) {
        weirdclass.value = "weirdleft";
    }
    if (e.keyCode === 39) {
        weirdclass.value = "weirdright";
    }
    if (e.keyCode === 40) {
        weirdclass.value = "weirddown";
    }
}
