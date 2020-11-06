var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var edges;
function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400,400);
  ground = createSprite(200,380, width*2, 20);
  ground.velocityX = 4;
  monkey = createSprite(30,342);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  edges = createEdgeSprites();
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  background("light_blue");
  text("Score: " + );
  if(ground.x > 300) {
     ground.x = 200
  }
  if(keyWentDown("SPACE")) {
     monkey.velocityY = -8;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  monkey.collide(edges[2]);
  obstacles();  
  food();
  drawSprites();
}
function food() {
 var randY = Math.round(random(70, 350))
 if(frameCount % 80 === 0) {
   banana = createSprite(430,randY);
   banana.addImage(bananaImage);
   banana.velocityX = -3;
   banana.scale = 0.1;
   banana.lifetime = 400/3;
   FoodGroup.add(banana);
 }
}
function obstacles() {
  var randY = Math.round(random(70,350));
  if(frameCount % 300 === 0) {
   obstacle = createSprite(430,randY);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3;
   obstacle.scale = 0.1;
   obstacle.lifetime = 400/3;
   obstacleGroup.add(obstacle);
  }
}

