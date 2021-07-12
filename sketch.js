const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,700,1200,20)
 floor1=new Floor(600,650,40,60)  
  floor2=new Floor(600,590,40,60) 
floor3=new Floor(600,530,40,60)
  ball=new Ball(500,600,50)
string=new String(ball.body,{x:500,y:400})
}

function draw(){
    background('lightgreen')
    Engine.update(engine);
ground.display()
floor1.display()
floor2.display()
floor3.display()
ball.display()
string.display()
}
function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


