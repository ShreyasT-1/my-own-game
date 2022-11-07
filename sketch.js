var hero, heroImg;
var backgroundImg;
var bg;
var bullet, bulletImg;
var m1Img;
var bulletGroup;
var monstorGroup;
function preload(){
  backgroundImg = loadImage("images/background.jpg")
 // bomb = loadImage("images/bomb.jpg")
  bulletImg = loadImage("images/bullet.png")
  //explosion = loadImage("images/download.jpg")
  heroImg = loadImage("images/hero.png")
  m1Img = loadImage("images/monster1.png")
  // m2Img = loadImage("images/monster2.png")
}


function setup() {
  createCanvas(800,500);
   bg = createSprite(0,0,800,500);
  bg.addImage(backgroundImg);
  bg.velocityX = -4;
  hero = createSprite(100,40, 50, 50);
  hero.addImage(heroImg)
  hero.scale=0.1
  
  bulletGroup = new Group;
  monstorGroup = new Group;
}

function draw() {
  background(0);  

  if(keyDown("up")){
    hero.y = hero.y -3;
  }
  if(keyDown("down")){
    hero.y = hero.y+3;
  }
  if(bg.x<0){
    bg.x = width/2;
  }
  if(keyDown("right")){
   spawnbullets()
  }
  spawnMonstor1()
  // spawnMonstor2()
  drawSprites();
  if (bulletGroup.isTouching(monstorGroup)){
    bulletGroup.destroyEach()
    monstorGroup.destroyEach()
  }
}

function spawnbullets(){
  if(frameCount%10==0){
    bullet = createSprite(hero.x,hero.y,10,10)
    bullet.addImage(bulletImg)
    bullet.scale = 0.05
    bullet.velocityX = 10
    bulletGroup.add(bullet)
  }

  
}

function spawnMonstor1(){
  if(frameCount%100 == 0){
    monstor1 = createSprite(800,Math.round(random(10,490)))
    monstor1.addImage(m1Img)
    monstor1.scale = 0.1
    monstor1.velocityX = -3 

    monstorGroup.add(monstor1)
  }
}
// function spawnMonstor2(){
//   if(frameCount%150 == 0){
//     monstor2 = createSprite(800,Math.round(random(10,490)))
//     monstor2.addImage(m2Img)
//     monstor2.scale = 0.1
//     monstor2.velocityX = -3 

//   }
// }
