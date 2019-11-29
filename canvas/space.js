var canvas = document.getElementById("spaceCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class planet {
    constructor(x, y, image, positionX, positionY, name){
        this.x = x;
        this.y = y;
        this.image = image;
        this.positionX = positionX;
        this.positionY = positionY;
        this.name = name;
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
var backgroundWidthScale = 2.2;
var backgroundHeightScale = 2.3;
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
var loopBuffer = 1;
var planetTextBuffer = 10;
var running = true;

function getDirection(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}

function afterLoad() {
    // the stuff you want to do after page load happens here
    shipWidth = ship.width;
    shipHeight = ship.height;
    background.width = canvas.width*backgroundWidthScale;
    background.height = canvas.height*backgroundHeightScale;
    backgroundWidth = background.width;
    backgroundHeight = background.height;
    shipX = canvas.width/2-shipWidth/2;
    shipY = canvas.height/2-shipHeight/2;
    backgroundX = canvas.width/2-backgroundWidth/2;
    backgroundY = canvas.height/2-backgroundHeight/2;
    const krysalPlanet = new planet(backgroundWidth*0.25, backgroundHeight*0.25, krysalPlanetImage, backgroundWidth*0.25, backgroundHeight*0.25, "LOFAC")
    planetList.push(krysalPlanet);
    setInterval(draw, 10);
}

function disableSpeed() {
    if(window.confirm("Are you sure you want to take off the speed limits?") == true) {
        shipSlowSpeed = 1;
    }
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
        planetList[p].x = (backgroundX)+planetList[p].positionX;
        planetList[p].y = (backgroundY)+planetList[p].positionY;
        
        ctx.drawImage(planetList[p].image, planetList[p].x, planetList[p].y);
        
        ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
            ctx.rect(planetList[p].x, planetList[p].y, planetList[p].image.width, planetList[p].image.height);
        ctx.stroke();
        
        ctx.font = "30px Arial";
        ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
        ctx.textAlign = "center";
        ctx.fillText(planetList[p].name, planetList[p].x + (planetList[p].image.width / 2), planetList[p].y-planetTextBuffer);
        
        if(shipX < planetList[p].x + planetList[p].image.width && shipX + shipWidth > planetList[p].x && shipY < planetList[p].y + planetList[p].image.height && shipY + shipHeight > planetList[p].y){
            running = false;
            window.alert("Now landing on: " + planetList[p].name)
            window.location.href = "https://www.google.com";
        }
    }
}

function draw() {
    if(running == true){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, backgroundX, backgroundY, background.width, background.height)
        drawPlanets();
        ctx.drawImage(ship, shipX, shipY, shipWidth, shipHeight );
    }
    shipX += shipVelX;
    shipY += shipVelY;
    shipVelX *= shipSlowSpeed;
    shipVelY *= shipSlowSpeed;
    backgroundX = (canvas.width/2-backgroundWidth/2)+((shipX-canvas.width/2+shipWidth/2)*-1);
    backgroundY = (canvas.height/2-backgroundHeight/2)+((shipY-canvas.height/2+shipHeight/2)*-1);
    
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
        shipX = 0-shipWidth;
    } else if(shipX+shipWidth < 0-loopBuffer) {
        shipX = canvas.width;
    }
    if(shipVelX > 854 || shipVelX < -854 || shipVelY > 661 || shipVelY < -661){
        alert("NOW APPROACHING LUDICROUS SPEEDS")
    }
}
