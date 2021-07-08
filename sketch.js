var sr,mr;

function setup() {

  createCanvas(800,400);
  sr = createSprite(400, 200, 50, 50);
  mr = createSprite(600, 200, 60, 30);
  mr.shapeColor ="blue";
  sr.shapeColor ="blue";
 mr.velocityX = -3;
 sr.velocityX = 3;
}

function draw() {
  background(255,255,255);
   // mr.x= World.mouseX;
    //mr.y= World.mouseY;

    /*if(isTouching(mr,sr)){
      mr.shapeColor ="red";
      sr.shapeColor ="red";

    }
    else{
      mr.shapeColor ="blue";
      sr.shapeColor ="blue";
    }*/
    bounceOff(mr,sr);
   
  drawSprites();
  }
