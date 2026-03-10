let effort = [0, 0];
let privileged = [true, false];
let maxEffort = 22;

function setup() {
  createCanvas(600, 200);
  textSize(16);
}

function draw() {
  background(230);

  let barWidth = width / 2;

  for (let i = 0; i < 2; i++) {

    let h = map(effort[i], 0, maxEffort, 0, height - 60);

    // Bar color: red until complete, then green
    if (effort[i] >= maxEffort) {
      fill(60, 160, 80); // green
    } else {
      fill(180, 80, 80); // red
    }

    rect(i * barWidth + 40, height - h - 30, barWidth - 80, h);

    // Text
    if (effort[i] >= maxEffort) {

      // green background for completion text
      fill(60, 160, 80);
      rect(i * barWidth + 40, 5, 160, 25);

      fill(255);
      text("STATE COMPLETE", i * barWidth + 50, 23);

    } else {
      fill(0);
      text("Effort: " + effort[i], i * barWidth + 40, 25);
    }
  }

  text("Click the mouse until the state is complete!", 10, height - 10);
}

function mousePressed() {
  for (let i = 0; i < 2; i++) {
    if (effort[i] < maxEffort) {
      if (privileged[i]) {
        effort[i] = effort[i] + 1;
      } else {
        if (random() < 0.4) {
          effort[i] = effort[i] + 1;
        }
      }
    }
  }
}