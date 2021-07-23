var bg,sleep,brush,bath,drink,eat,gym,move,astronaut


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
}
function preload(){
   bg = loadImage("iss.png");
   sleep = loadAnimation("sleep.png");
   brush = loadAnimation("brush.png");
   bath = loadAnimation("bath1.png", "bath2.png");
   drink = loadAnimation("drink1.png", "drink2.png");
   eat = loadAnimation("eat1.png", "eat2.png");
   gym = loadAnimation("gym1.png", "gym2.png");
   move = loadAnimation("move.png", "move1.png");

   


}
function draw() {
  background(bg); 
  createEdgeSprites();
  if (keyDown("up_arrow")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("right_arrow")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }


  if (keyDown("left_arrow")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("down_arrow")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  
  
  drawSprites();
}