
function myGameArea = {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas")
    start : function() {
        this.canvas.width = 5000;
        this.canvas.height = 5000;
        this.context = this.canvas.getContext ("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
