
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	r1 = new Dustbin(600,600,20,200);
	r2 = new Dustbin(200,600,20,200);
	r3 = new Dustbin(100,600,200,20);
	land = new Ground(400,900,900,20);
	ball = new Ball(200,500,5)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
r1.display();
r2.display();
r3.display();
land.display();
ball.display();
}

fuction keyPressed() {

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ballObject.body,papperObject.body.podition,{x:85,y:-85})
	}
	
}


