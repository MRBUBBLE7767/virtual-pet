//Create variables here
var dog,dog1 , happyDog , database , foodS , foodStock ;
function preload(){
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(350,250,10,10)
  dog.addImage(dog1);
  dog.scale = 0.3;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock());
  
}


function draw() {  
  background("white");
  text("Milk Bottles: "+foodStock,100,50);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  
  }
  drawSprites();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
