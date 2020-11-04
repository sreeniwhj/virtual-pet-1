//Create variables here
var dog,dogImg,HappyDog,database,foodS,foodStalk
function preload()
{
  dogImg  = loadImage("images/dogImg.png");
  HappyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.3
  foodStock = database.ref('Food'); 
  foodStock.on("value", readStock);
  

  
}


function draw() {  
  background(46, 139, 87);
   if(keyWentDown(UP_ARROW))
   { writeStock(foodS);
     dog.addImage(HappyDog);
     }
  drawSprites();
  //add styles here
  fill("black");
   text("Remaining Food: " + foodS, 200, 120); 
   textSize(20) 
   text("Note: Press UP_ARROW Key To Feed Drago Milk", 40, 20)
}


function readStock(data){
   foodS = data.val();
   }
   function writeStock(x){
      if(x<=0){ x = 0; }
      else{ x = x - 1; }
       database.ref('/').update({ Food:x })
      }