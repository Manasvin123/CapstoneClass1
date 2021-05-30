const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine, world
var Ground
var Box=[]
var Box2=[]
var Ball
var Crane
var Chain

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
world=engine.world
Ground=new ground(400, 380, 1200, 50)
for(var i=200; i<380;i=i+20){
Box.push(new box(380, i, 60, 30, "red"))
}
for(var k=250; k<380; k=k+20){
Box2.push(new box(480, k, 60, 30, "blue"))
}
Ball=new ball(150, 200, 60, "gray")
Crane= new crane(150, 0, 100, 10, "yellow")
Chain=new chain(Ball.body, Crane.body)
}

function draw() {
  background(52, 186, 235);  
Engine.update(engine)
Ground.display();
for(var i=0; i<Box.length; i++){
Box[i].display()

}
for(var k=0; k<Box2.length; k++){
  Box2[k].display()
  
}
Crane.bodies.position.x=mouseX
Ball.display();
Crane.display();
Chain.display();
}