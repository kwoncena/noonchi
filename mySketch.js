let eyes = [];
let numEyes = 32;
let eyeIndex = 0;
let eyeSize = 500;


function preload(){
  
  for(let i = 0; i < 31; i++){
		eyes[i] = loadImage('IMG_' + (1323+i) + '.PNG');
		console.log();
	}
	

}

function setup() {
  createCanvas(400, 400);
  

  
}


function draw() {
  background(255);
  //imageMode(CENTER);
  
 if(mouseX < width/2 && mouseY < height/2){
		background(0,255,255,120);
	}else if(mouseX > width/2 && mouseY < height/2){
		background(255,0,255,120);
	}else if(mouseX < width/2 && mouseY> height/2){
		background(255,255,0,120);
	}else if(mouseX > width/2 && mouseY> height/2){
		background(220,220,220,120);
	}else if(mouseX == CENTER && mouseY == CENTER){
		background(255);
	}
	
  image(eyes[eyeIndex], mouseX, mouseY, eyeSize, eyeSize);

  
	
	
  
}

function mousePressed(){

  eyeIndex = floor(random(eyes.length));
	eyeSize = random(width);


  
}


