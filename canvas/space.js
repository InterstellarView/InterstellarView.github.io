var canvas = document.getElementById("spaceCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class planet {
    constructor(x, y, image, positionX, positionY,){
        this.x = x;
        this.y = y;
        this.image = image;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}
var ship = document.getElementById("ship");
var background = document.getElementById("background");
var planetList = [];
var krysalPlanetImage = document.getElementById("krysalPlanet");
var backgroundX = 0;
var backgroundY = 0;
var backgroundWidth;
var backgroundHeight;
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
    shipWidth = ship.width;
    shipHeight = ship.height;
    backgroundWidth = background.width;
    backgroundHeight = background.height;
    shipX = canvas.width/2-shipWidth/2;
    shipY = canvas.height/2-shipHeight/2;
    backgroundX = canvas.width/2-backgroundWidth/2;
    backgroundY = canvas.height/2-backgroundHeight/2;
    const krysalPlanet = new planet(backgroundWidth*0.75, backgroundHeight*0.5, krysalPlanetImage, backgroundWidth*0.75, backgroundHeight*0.5);
    planetList.push(krysalPlanet);
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


function drawPlanets() {
    for(var p=0; p < planetList.length; p++) {
        planetList[p].x = ((shipX/2)*-1)+planetList[p].positionX;
        planetList[p].y = ((shipY/2)*-1)+planetList[p].positionY;
        ctx.drawImage(planetList[p].image, planetList[p].x, planetList[p].y);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, backgroundX, backgroundY,)
    drawPlanets()
    ctx.drawImage(ship, shipX, shipY);
    shipX += shipVelX;
    shipY += shipVelY;
    backgroundX = (shipX/2)*-1;
    backgroundY = (shipY/2)*-1;
    shipVelX *= shipSlowSpeed;
    shipVelY *= shipSlowSpeed;
    
    if(leftPressed == true){
        shipVelX -= 0.1;
    } else if(rightPressed == true) {
        shipVelX += 0.1;
    }
    
    if(upPressed == true) {
        shipVelY -= 0.1;
    } else if (downPressed == true) {
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
