const { fileLoader } = require("ejs");

function Box(x, y, width, height){
    this.body = Bodies.rectangle(x, y, width, height);
    this.width= width;
    this.height = height;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0, 0, this.width, this.height);

        pop();
    }
}