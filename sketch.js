var sea,sea_img;
var ship,ship_img;
function preload(){
  sea_img = loadImage("sea.png")

  ship_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400)
  sea.addImage("floating",sea_img);
  sea.velocityX=-2;
  sea.scale=0.3;
 
  ship = createSprite(100,200,40,40)
  ship.addAnimation("sailing",ship_img);
  ship.scale =0.3;
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/7;
  }


  drawSprites();
}