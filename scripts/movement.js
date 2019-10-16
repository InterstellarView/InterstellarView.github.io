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

    //Defines objects or whatever
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
    if (type == "image") {
        ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
      } else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
}
}
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "../images/Ship.png", 10, 120, "image");
}
