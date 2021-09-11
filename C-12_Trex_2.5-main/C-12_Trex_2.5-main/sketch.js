var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var Cloud,Cloud_image;
var Obstacle,ObstacleImg1,ObstacleImg2,ObstacleImg3,ObstacleImg4,ObstacleImg5,ObstacleImg6
var Random;

var score = 0;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  Cloud_image = loadImage("cloud.png");
  ObstacleImg1 = loadImage("obstacle1.png")
  ObstacleImg2 = loadImage("obstacle2.png")
  ObstacleImg3 = loadImage("obstacle3.png")
  ObstacleImg4 = loadImage("obstacle4.png")
  ObstacleImg5 = loadImage("obstacle5.png")
  ObstacleImg6 = loadImage("obstacle6.png")
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
  if(keyDown("space")&& trex.y >= 155) {
    trex.velocityY = -15;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  textSize(18)
  fill("pink")
  text("Score :" +score,50,50)
  score = score + Math.round(frameCount/60)
  spawnObstacles()
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
Cloud.lifetime = 200

}
}
function spawnObstacles() {
  if(frameCount%80 == 0) {
  Obstacle = createSprite(600,165,10,40)
  Obstacle.velocityX = -5
  Random = Math.round(random(1,6))
switch(Random) {
  case 1: Obstacle.addImage(ObstacleImg1)
  break;
  case 2: Obstacle.addImage(ObstacleImg2)
  break;
  case 3: Obstacle.addImage(ObstacleImg3)
  break;
  case 4: Obstacle.addImage(ObstacleImg4)
  break;
  case 5: Obstacle.addImage(ObstacleImg5)
  break;
  case 6: Obstacle.addImage(ObstacleImg6)
  break;
}
Obstacle.scale = 0.5;
Obstacle.lifetime = 120
Obstacle.collide(invisibleGround);

  }
}



