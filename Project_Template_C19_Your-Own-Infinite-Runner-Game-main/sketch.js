var bg ;

 function preload(){
bg=loadImage("white dragon.jpg")
}

function setup() {
 createCanvas(700,700);

 x=createInput("").attribute("placeholder", "Enter value ");
 x.position(100,400);
 btn=createButton("Submit",onClick=handleMousePressed);
 btn.position(100,500); 
 
}

function draw() {
 
    background(bg);
     fill("red");
      textSize(30);
       text("Maze Game",100,100);
        text("Trex Runner",100,200); 
        text("Epic Archery",100,300); 
handleMousePressed();

drawSprites();
}

function handleMousePressed()
 { 
     if(x.value()===1){
}else if(x.value()===2){
    epic();
   } else if(x.value()===3){ 
} 
}
    function trex(){

     } 
    function maze(){ 

    } 
    function epic(){
    location.href="https://samuraivai2007.github.io/bn/";
    }
