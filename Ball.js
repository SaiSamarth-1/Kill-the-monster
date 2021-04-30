class Ball{
    constructor(x, y, radius) {
        var options = {
            'frictionAir': 0.005,
            'density':1.0
        }
        this.image = loadImage("images/superhero1.png")
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 400, 200);
        pop();
      }
}