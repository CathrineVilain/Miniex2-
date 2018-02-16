var flowerX;
var flower1;
var flower2;
var fU;
var fuck;


function preload() {
  flower1 = loadImage('Flowers/flower1.jpg');
  flower2 = loadImage('Flowers/flower2.jpg');
  fU = loadImage('Flowers/fU.jpg')
  soundFormats('mp3');
  sound1= loadSound('Sounds/Morningsong.mp3');
  flowerX = 0;
  fuck = 0;
}
function setup() {
  // put setup code here
  createCanvas(1400,700);
  background('#222222');

  image(flower1, 0, 0);

//set to 0.1
sound1.setVolume(0.1);
  sound1.play();
}

function draw() {
  if (flowerX === 0){
    image(flower1,0,0)
  }
  if (flowerX === 1){
    image(flower2,0,0)
  }
  if (flowerX === 2){
    image(fU,0,0)
  }

if (flowerX === 1){
  fuck++
}
}




/*  function mousePressed() {
   if(flowerX === flower1){
   flowerX=createImage('Flowers/flower2.jpg');
}
}
function mousePressed() {
 if(flowerX === flower2){
 flowerX=loadImage('Flowers/fU.jpg');
}
}
*/

function mousePressed(){
  if (flowerX === 0) {
  flowerX = 1;
  }
  if ((flowerX === 1) && (fuck > 30)) {
  flowerX = 2;
  }
}
