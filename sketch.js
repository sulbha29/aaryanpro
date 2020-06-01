const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var car;


function setup() {
  createCanvas(1300,1300)
  engine = Engine.create();
  world = engine.world;
  car = new Player(500,300,100,100)
}

function draw() {
  background(0);
  Engine.update(engine);
 car.display();
 
 
}