
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dground,tree,treeImg;
var mango1,	mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var boyImg,boy;
var stoneobj;
var Launcher2;

function preload(){
	boyImg=loadImage("images/boy.png");
	treeImg=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	dground = new ground(500,630,1000,20);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,280,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(830,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	stoneobj = new stone(160,550);
Launcher2 = new Launcher(stones.body,{x:230,y:500});



tree = createSprite(775,368);
tree.addImage(treeImg);
tree.scale = 0.42

boy = createSprite(160,550);
boy.addImg(boyImg);
boy.scale = 0.025;

	Engine.run(engine);

}

function draw() {
rectMode(CENTER);
background("grey");

fill("black");
textSize(18);



detectCollision(stones,mango1);
detectCollision(stones,mango2);
detectCollision(stones,mango3);
detectCollision(stones,mango4);
detectCollision(stones,mango5);
detectCollision(stones,mango6);
detectCollision(stones,mango7);
detectCollision(stones,mango8);
detectCollision(stones,mango9);
detectCollision(stones,mango10);

drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  dground.display();
  stoneobj.display();
  Launcher2.display();
 



}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	attach.fly();
}


