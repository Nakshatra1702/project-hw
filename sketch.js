
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}


function draw() 
{







  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed

   box.x = box.x+5
box.x=box.x-5
box.y=box.y+5
box.y=box.y-5
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
if (keyIsDown(RIGHT_ARROW)){
  background("red")
}

  
  drawSprites();
}

