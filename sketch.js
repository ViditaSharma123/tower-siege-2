const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj;
var standObj1, standObj2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var slingshot;
var ball;
var ballImg;


function preload(){
  ballImg = loadImage("polygon.png");

}
function setup() {

engine = Engine.create();
world = engine.world;

  createCanvas(900,400);
 

  groundObj = new Ground(450,390,900,20)

  
  block1 = new Box(300,290,30,40)
  block2 = new Box(330,290,30,40)
  block3 = new Box(360,290,30,40)
  block4 = new Box(390,290,30,40)
  block5 = new Box(420,290,30,40)
  block6 = new Box(450,290,30,40)
  block7 = new Box(480,290,30,40)
  
 
  block8 = new Box(330,250,30,40)
  block9 = new Box(360,250,30,40)
  block10 = new Box(390,250,30,40)
  block11 = new Box(420,250,30,40)
  block12 = new Box(450,250,30,40)
  
  block13 = new Box(360,210,30,40)
  block14 = new Box(390,210,30,40)
  block15 = new Box(420,210,30,40)
  

  block16 = new Box(390,170,30,40)

  



  block17 = new Box(640,170,30,40)
  block18 = new Box(670,170,30,40)
  block19 = new Box(700,170,30,40)
  block20 = new Box(730,170,30,40)
  block21 = new Box(760,170,30,40)

  block22 = new Box(670,130,30,40)
  block23 = new Box(700,130,30,40)
  block24 = new Box(730,130,30,40)

  block25 = new Box(700,90,30,40)




  standObj1 = new Stand(390,300,250,10)
  standObj2 = new Stand(700,200,200,10)

  ball = Bodies.circle(50,200,20)
 
  World.add(world,ball)


  
  slingshot = new SlingShot(this.ball, {x:100,y:200})



  Engine.run(engine);
}


function draw() {

  
  background(0);  

  fill("turquoise");
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()

  fill("yellow");
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()

  fill("pink");
  block13.display()
  block14.display()
  block15.display()

  fill("red")
  block16.display()


  fill("green")
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()

  fill("lightblue")
  block22.display()
  block23.display()
  block24.display()

  fill("purple")
  block25.display()

  

  groundObj.display()
  standObj1.display()
  standObj2.display()
  slingshot.display()
  imageMode(CENTER);
  image(ballImg,ball.position.x,ball.position.y,40,40)
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    //Matter.Body.setPosition(this.ball,{x:50,y:200});
    slingshot.attach(this.ball);
  }
}