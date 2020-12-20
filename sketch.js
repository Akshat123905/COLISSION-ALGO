var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  fixedRect.velocityY = +5;
  movingRect = createSprite(400,800,80,30)
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  movingRect.velocityY = -5;
}

function draw() {
  background("white");  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //isTouching();
  bounceOff();
  drawSprites();
}
function isTouching(){
  if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor = "green";
  }
  else(
    movingRect.shapeColor = "blue"
  )
}
function bounceOff(){
if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 ){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);

  }
  if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
  
    }
  
}