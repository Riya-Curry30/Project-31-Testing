const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division;
var particle = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() 
{
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,800,10);
  
  
  
}

function draw()
 {
  background("black"); 
  Engine.update(engine); 
  ground.display();

  for(var k = 0; k<=width; k = k + 80)
  {
    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(k,75));
  }

  for(var j = 15; j <= width -10; j = j + 50)
  {
    plinkos.push(new Plinko(j,175));
  }

  if(frameCount % 60 === 0)
  {
    particle.push(new Particle(random(width/2-10, width/2+10)), 10, 10);

  }

  for(var j = 0; j < particle.length; j++)
  {
    particle[j].display();
  }

  for(var k =0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
}