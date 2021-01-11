
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var tree1;
var boy1;
var rope1;
var stone1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
tree1 = new Tree()
mango1 = new Mango(650, 450);
mango2 = new Mango(600, 400);
mango3 = new Mango(550, 450);
mango4 = new Mango(690, 400);
mango5 = new Mango(470 , 420)
mango6 = new Mango(670 , 330)	
mango7 = new Mango(540 , 370)
mango8 = new Mango(750 , 455)  
mango9 = new Mango(600 , 340)
stone1 = new Stone()
boy1= new Boy()
rope1 = new Throw(stone1.body, {x: 200, y: 617});
}


function draw() {
  rectMode(CENTER);
  background(204, 255, 250);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  boy1.display();
  stone1.display();
  rope1.display();

  drawSprites();
 
}
function mouseDragged(){
 
       Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
   rope1.fly();
  
}

function keyPressed(){
   if(keyCode === 32){
    Matter.Body.setPosition(stone1.body, {x: 200, y: 50});
    rope1.attach(stone1.body);
   }
}


