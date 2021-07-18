var cat,catImg1,catImg2;
var mouse,mouseImg1;
var gardenImg;

function preload() {
    gardenImg = loadImage("images/garden.png"); 
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(800,600,20,20);
    cat.addAnimation("cat1",catImg1);
    cat.scale = 0.2;
    mouse = createSprite(200,650,10,10);
    mouse.addAnimation("mouse1",mouseImg1);
    mouse.scale = 0.1;

}

function draw() {
    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2) {
    cat.velocityX = cat.velocityX * (-1);
      mouse.velocityX = mouse.velocityX * (-1);
      mouse.addAnimation(mouseImg1);
    }
    if (mouse.y - cat.y < cat.height/2 + mouse.height/2
      && cat.y - mouse.y < cat.height/2 + mouse.height/2){
      mouse.velocityY = mouse.velocityY * (-1);
      cat.velocityY = cat.velocityY * (-1);
      cat.addAnimation(catImg1);
    }
  


    drawSprites();
}

function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        cat.velocity = -4;
        cat.addAnimation = ("cat2",catImg2);
        mouse.addAnimation("mouse2",mouseImg2);
        mouse.frameDelay = 25;
        cat.frameDelay = 25;
    }
    if (keyCode === RIGHT_ARROW){
       
    }
    

}
 