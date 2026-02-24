let steps = 0;
let maxSteps = 8;

function setup () {
  createCanvas(600, 200);
}

function draw () {

  // background
  if (steps >= maxSteps) {
    background(0, 180, 0); // green
  } else {
    background(204); // gray
  }

  // text
  fill(0);
  textSize(16);
  text("click to begin", width - 360, height - 100);

  // arrow
  beginShape();
    vertex(180, 82);
    vertex(207, 36);
    vertex(214, 63);
    vertex(407, 11);
    vertex(412, 30);
    vertex(219, 82);
    vertex(226, 109);
  endShape();

  let sectionWidth = width / maxSteps;

  // sections
  noStroke();

  if (steps >= maxSteps) {
    fill(0, 255, 0); // green bars when complete
  } else {
    fill("#808080"); // gray bars while incomplete
  }

  for (let i = 0; i < steps; i++) {
    rect(i * sectionWidth, 0, sectionWidth, height);
  }

  // state text
  if (steps >= maxSteps) {
    fill(255);
    textSize(16);
    text("State Complete", width - 360, height - 100);
  } else {
    fill("#FF0000");
    textSize(18);
    text("State: inComplete", width - 150, height - 20);
  }
}

function mousePressed() {
  if (steps < maxSteps) {
    steps++;
  }
}