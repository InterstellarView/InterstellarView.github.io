var canvas = document.getElementById("spaceCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ship = document.getElementById("ship");
var background = document.getElementById("background")
var shipWidth;
var shipHeight;
var shipX;
var shipY;
var shipVelX = 0;
var shipVelY = 0;
var shipSlowSpeed = 0.99;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var loopBuffer = 10;
function afterLoad() {
    // the stuff you want to do after page load happens here
    background.width = canvas.width;
    background.height = canvas.height;
    shipWidth = ship.width;
    shipHeight = ship.height;
    shipX = canvas.width/2-shipWidth/2;
    shipY = canvas.height/2-shipHeight/2;
    console.log(shipX);
    console.log(shipY);
    setInterval(draw, 10);
}

window.addEventListener("load", afterLoad, false);
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    switch (e.key) {
        case "Left":
        case "ArrowLeft":
            leftPressed = true;
            break;
        case "Right":   
        case "ArrowRight":
            rightPressed = true;
            break;
        case "Up":
        case "ArrowUp":
            upPressed = true;
        case "Down":
        case "ArrowDown":
            downPressed = true;
        default:
            break;
    
    }
}

function keyUpHandler(e){
    switch (e.key) {
        case "Left":
        case "ArrowLeft":
            leftPressed = false;
            break;
        case "Right":   
        case "ArrowRight":
            rightPressed = false;
            break;
        case "Up":
        case "ArrowUp":
            upPressed = false;
        case "Down":
        case "ArrowDown":
            downPressed = false;
        default:
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0)
    ctx.drawImage(ship, shipX, shipY);
    shipX += shipVelX;
    shipY += shipVelY;
    shipVelX *= shipSlowSpeed;
    shipVelY *= shipSlowSpeed;
    
    if(leftPressed == true){
        console.log("Left");
        shipVelX -= 0.1;
    } else if(rightPressed == true) {
        console.log("Right");
        shipVelX += 0.1;
    }
    
    if(upPressed == true) {
        console.log("Up");
        shipVelY -= 0.1;
    } else if (downPressed == true) {
        console.log("Down")
        shipVelY += 0.1;
    }
    
    if(shipY > canvas.height+loopBuffer){
        shipY = 0-shipHeight;
    } else if(shipY+shipHeight < 0-loopBuffer) {
        shipY = canvas.height;
    }
    if(shipX > canvas.width+loopBuffer) {
        shipX = 0 -shipWidth;
    } else if(shipX+shipWidth < 0-loopBuffer) {
        shipX = canvas.width;
    }
   
}

