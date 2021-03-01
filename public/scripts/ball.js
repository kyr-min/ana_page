function Ball(x, y, width) {
    var options = {
        friction: 0.3,
        restitution: 0.6
    }

    this.body = Bodies.circle(x, y, width/2, options);
    this.width= width;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        fill(127);
        circle(0, 0, this.width);

        pop();
    }
}