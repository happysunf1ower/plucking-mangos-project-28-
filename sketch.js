
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj;
var stoneObj;
var groundObj; 
var launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var world;
var boy;
var stoneObj;

function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() 
{
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(900,200,30);
	mango2 = new mango(1000,100,30);
	mango3 = new mango(1100,150,30);
	mango4 = new mango(1200,225,30);
	treeObj = new tree(1050,580);
	groundObj = new ground(width/2,600,width,20);
	stoneObj = new stone(240, 420, 20);
	launcherObject = new slingshot(stoneObj.body,{x: 240, y: 420});
	
	Engine.run(engine);

}

function draw() 
{

  background(230);
  //Add code for displaying text here!
  image(boy, 200, 340, 200, 300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  groundObj.display();
  stoneObj.display();
  launcherObject.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
    launcherObject.fly();
}