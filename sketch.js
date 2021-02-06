var ball, ball1, ball2, ball3, ball4 , ball5, ball6 , ball7, ball8, ball9, polygon , polygonImg;
var gameState = "onSling";
function preload(){
polygonImg=loadImage("polygon.png")

}
function setup(){
 createCanvas(1000, 1000)   
ball=createSprite(400, 300, 30, 30)
ball1=createSprite(440, 300, 30, 30)
ball2=createSprite(480, 300, 30, 30)
ball3=createSprite(440, 260, 30 , 30)
ball4=createSprite(440, 220, 30, 30)
ball5=createSprite(600, 300, 30, 30)
ball6=createSprite(640, 300, 30, 30)
ball7=createSprite(680, 300, 30, 30)
ball8=createSprite(640, 260, 30, 30)
ball9=createSprite(640, 220, 30, 30)
polygon=createSprite(100, 250, 30, 30)

}
function draw (){
  drawSprites();  
}



function mouseReleased(){
   
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       
    }
}
async function getBackgroundImg(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")


    var responseJSON=await response.json()

    var datetime=responseJSON.datetime
    var hour=datetime.slice(11,13)
    if(hour>=06 && hour<=19){

}}