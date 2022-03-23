const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var shipGroup , bomb,air_bombGroup;

function preload(){
air_bombImg = loadImage("air_bomb.png");
bomb = loadImage("bomb.png");
explosionimg= loadImage("explosion_1.png");
oceanimg= loadImage("ocean.jpg");
planeimg=loadImage("plane.png");
ship1img = loadImage("ship1.png");
ship2img= loadImage("ship2.png");
ship3img = loadImage("ship3.png");
}





function setup(){
createCanvas(1200,800);
frameRate(80);
engine = Engine.create();
world = engine.world;


ocean= createSprite(0,200,1200,800);
ocean.addImage(oceanimg);
ocean.scale=2.4;
ocean.velocityX=-1.5;

plane = createSprite(400,100);
 plane.addImage(planeimg);
 plane.scale=0.4;

//  ship1= createSprite(1500,600,100,20);
//  ship1.addImage(ship1img);
//  ship1.scale=0.5;
//  ship1.velocityX=-3;
  
//  ship2= createSprite(1500,500,100,20);
//  ship2.addImage(ship2img);
//  ship2.scale=0.5;
//  ship2.velocityX=-3;
  
//  ship3img= createSprite(1500,700,100,20);
//  ship3.addImage(ship3img);
//  ship3.scale=1;
//  ship3.velocityX=-3;
  




shipGroup=createGroup();
air_bombGroup= createGroup();



//bomb= new Bomb(plane.position.x,plane.position.y,20,50);











}

function draw(){
    background(51);
    
    if(ocean.x<20){
        ocean.x=1000;
    }

    if(keyDown("UP_ARROW")){
        plane.y= plane.y-5;
       
    }
    
     if(keyDown("DOWN_ARROW")){
         plane.y= plane.y+5;
         
    }



    if(keyDown("space")){
        bomb.velocityY= 13;
    }
    

    if(plane.y<50){
        plane.y=50;
    }

    



    //bomb.show();







    Engine.update(engine);

   obstacles();
   airobstacles();
   gameOver();
   

    drawSprites();
}

function obstacles(){
    if(frameCount% 300===0){
       ship= createSprite(1500,600,100,20);
        ship.addImage(ship1img);
         ship.scale=0.7;
         ship.velocityX=-3;

         var rand= Math.round(random(1,3))

         switch (rand){
            case 1:ship.addImage(ship1img);
                    break;
            case 2:ship.addImage(ship2img);
                    break;
            case 3:ship.addImage(ship3img);
            
                    break;
         }
         shipGroup.add(ship);
         
         
    }
   }

   function airobstacles(){
    if(frameCount% 150===0){
        air_bomb= createSprite(1500,100,20,20);
        air_bomb.addImage(air_bombImg);
        air_bomb.velocityX=-5;
        air_bomb.scale=0.2;

        var rand1= Math.round(random(1,3))

            switch (rand1){
                case 1: air_bomb.y=150;
                      break;
                case 2: air_bomb.y=200;
                      break;
                case 3: air_bomb.y=140;
                      break;
                case 4: air_bomb.y=50;
                      break;
            
        }
        air_bombGroup.add(air_bomb);
    }
   }
  
   function gameOver(){
       if(air_bombGroup.isTouching(plane) || shipGroup.isTouching(plane)){
           shipGroup.setVelocityEach(0);
           air_bomb.setVelocityEach(0);
           ocean.velocityX=0;
           
       }
   }