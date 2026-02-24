let pictures = [];
let currentIndex = 0;

function preload(){
  pictures[0] = loadImage("../img/image1.jpg");
  pictures[1] = loadImage("../img/image2.PNG");
  pictures[2] = loadImage("../img/image3.PNG");
  pictures[3] = loadImage("../img/image4.PNG");
  pictures[4] = loadImage("../img/image5.PNG");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw(){
  background(0);

  let img = pictures[currentIndex];

  // changing scale of the images since they're larger than the canvas via https://p5js.org/
  let scaleFactor = min(width / img.width, height / img.height);
  let newWidth = img.width * scaleFactor;
  let newHeight = img.height * scaleFactor;

  image(img, width/2, height/2, newWidth, newHeight);

  fill(255);
  textSize(24);
  text("state " + (currentIndex + 1) + " / " + pictures.length, width/2, 40);

  textSize(16);
  text("use left and right arrows to navigate", width/2, height - 40);
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW) {
    currentIndex++;
    if(currentIndex >= pictures.length){
      currentIndex = 0;
    }
  }

  if(keyCode === LEFT_ARROW){
    currentIndex--;
    if(currentIndex < 0){
      currentIndex = pictures.length - 1;
    }
  }
}