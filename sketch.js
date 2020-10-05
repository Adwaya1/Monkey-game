var monkey, monkey_running;
var bananaImage;
var stone;
var ground, InvisibleGround;
var backImage;
var obstacleImage;
var gameState, END, PLAY;



function preload() {
  backImage = loadImage("jungle.jpg");

  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");


  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");

}


function setup() {
  createCanvas(800, 600);
  
  ground = createSprite(380,360,400,20);
  ground.addImage("ground",backImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  player = createSprite(200,350,20,50);
  player.addAnimation("running",player_running);
  player.scale = 0.2;
  
  banana = createSprite(180,340,20,50);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.2;
  
  stone = createSprite(200,350,20,50);
  stone.addImage("stone",obstacleImage);
  stone.scale = 0.3;
  
 
  
  invisibleground = invisibleground(380,385,400,400);
  invisibleground.visible = false;
  
  PLAY = 1;
  END = 0;

  gameState = PLAY;

   if (backImage.x < 0) {
      backImage.x = backImage.width / 2;
    }

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 300;
}

function draw() {
  background(220);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score, 500,50);
  
  
  drawSprites();
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(180,340,20,50);
    banana.y = Math.round(random(80, 120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;

    //adjust the depth
    banana.depth = player.depth;
    player.depth = player.depth + 1;

    //add each cloud to the group
    bananaGroup.add(banana);
  }

}
function spawnstone() {
  if (frameCount % 60 === 0) {
    var sstone = createSprite(600, 165, 10, 40);
    stone.velocityX = -4;

    //generate random obstacles
    var rand = Math.round(random(1, 6));
  }
}