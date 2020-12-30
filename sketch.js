var PLAY = 1;
var END = 0;
var gameState = PLAY;


var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var arrowGroup, blueB, redB, pinkB, greenB, bowGroup;



function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
  // Creating Groups
  arrowGroup = new Group();
  redB = new Group();
  blueB = new Group();
  pinkB = new Group();
  greenB = new Group();
  bowGroup = new Group();
 
}

function draw() {
  
  
  // moving ground
    

    if (background.x < 0){
      background.x = background.width/2;
    }
  background.velocityX = -3;
   // text("hello", 270, 30);
  if(gameState===PLAY) {
    
  //moving bow
  bow.y = World.mouseY
  bowGroup.add(bow);
 
  
  var select_balloon = Math.round(random(1,4));
 // console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  // Making the arrow distroy on touching the arrow.
  if(arrowGroup.isTouching(redB)) {
    arrowGroup.destroyEach();
    redB.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(blueB)) {
    arrowGroup.destroyEach();
    blueB.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(greenB)) {
    arrowGroup.destroyEach();
    greenB.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(pinkB)) {
    arrowGroup.destroyEach();
    pinkB.destroyEach();
    score = score+1;
  }
  
  
      // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
    if(red.x > bow.x) {
      gameState = END;
    }
  }
  
  else if(gameState === END) {
    greenB.setVelocityXEeach(0);
    redB.setVelocityXEach(0);
    blueB.setVelocityXEeach(0);
    pinkB.setVelocityXEeach(0);
  }
  
  
  drawSprites();
 // text("Score: " + score, 270, 30);
  
  text("Score: " + score, 270, 30);

}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.scale = 0.1;
  redB.add(red);            
  red.lifetime = 300;
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.scale = 0.1;
  blue.lifetime = 300;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.scale = 0.1;
  green.lifetime = 300;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale = 1;
  pink.lifetime = 300;
  pinkB.add(pink);
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.addImage(arrowImage);
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
}

