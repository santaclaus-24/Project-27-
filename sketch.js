const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(240,300,30);
	bobObject2 = new Bob(300,300,30);

	bobObject3 = new Bob(360,300,30);
	bobObject4 = new Bob(420,300,30);
	bobObject5 = new Bob(480,300,30);

	roof = new Roof(360,100,850,30);

	rope1 = new Rope(bobObject1.body,roof.body,-120,0)
	rope2 = new Rope(bobObject2.body,roof.body,-60,0)
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	rope4 = new Rope(bobObject4.body,roof.body,60,0)
	rope5 = new Rope(bobObject5.body,roof.body,120,0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-105,y:-115});
  }
  if(keyCode === UP_ARROW){
    Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-105,y:-115});
  }
  if(keyCode === DOWN_ARROW){
    Body.applyForce(bobObject4.body,bobObject4.body.position,{x:+105,y:115});
  }
  if(keyCode === RIGHT_ARROW){
    Body.applyForce(bobObject5.body,bobObject5.body.position,{x:+105,y:+115});
  }
}



