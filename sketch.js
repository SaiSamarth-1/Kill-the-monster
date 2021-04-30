
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var skyImage;
var ball, rope;
var engine, world;

function preload() {
//preload the images here
      skyImage = loadImage("images/gamingbackground2.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create();
	world = engine.world;

  ball = new Ball(300,300,20);
	rope = new Rope(ball.body, {x : 500, y : 50});

  Engine.run(engine);

}

function draw() {
  background(skyImage);

  // rope.display();
  ball.display();

}

function mouseDragged(){
	Body.setPosition(ball.body, {x : mouseX, y : mouseY});
}

