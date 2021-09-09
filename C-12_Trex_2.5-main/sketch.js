var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var Cloud,Cloud_image;



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  Cloud_image = loadImage("cloud.png");

  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,185,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers


}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 125) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
if(frameCount%60===0) {
  Cloud = createSprite(600,100,40,10)
Cloud.x = Math.round(random(300,600))
Cloud.y = Math.round(random(20,60))
Cloud.velocityX = -2
Cloud.addImage(Cloud_image)
Cloud.scale = 0.8
Cloud.depth = trex.depth
trex.depth = trex.depth + 1
}
}



