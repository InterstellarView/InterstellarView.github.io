// Variables

    //Stars And Mapping
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 5000;
        this.canvas.height = 5000;
        this.context = this.canvas.getContext ("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

    //Ship
var myGamePiece;

// Functions

    //Loads everything in
function startGame() {
    myGamePiece = new component(30, 30, "../images/Ship.png", 10, 120, "image");
    myGameArea.start();
}
    //Defines objects or whatever
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGamearea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
