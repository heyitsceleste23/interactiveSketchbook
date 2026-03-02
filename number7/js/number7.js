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

    // Set color based on privilege
    if (privileged[i]) {
      fill(60, 160, 80);   // green
    } else {
      fill(180, 80, 80);   // red
    }

    // Corrected map() — must have 5 parameters
    let h = map(effort[i], 0, maxEffort, 0, height - 60);

    rect(i * barWidth + 40, height - h - 30, barWidth - 80, h);

    fill(0);

    if (effort[i] >= maxEffort) {
      text("DONE", i * barWidth + 40, 25);
    } else {
      text("Effort: " + effort[i], i * barWidth + 40, 25);
    }
  }

  text("same input, different outcomes", 10, height - 10);

//    if (steps >= maxSteps) {
//     fill(255);
//     textSize(16);
//     text("State Complete", width - 360, height - 100);
//   } else {
//     fill("#FF0000");
//     textSize(18);
//     text("State: incomplete", width - 150, height - 20);
//   }
}

function mousePressed() {
  for (let i = 0; i < 2; i++) {
    if (effort[i] < maxEffort) {
      if (privileged[i]) {
        effort[i] = effort[i] + 1;
      } else {
        // Fixed random() syntax
        if (random() < 0.4) {
          effort[i] = effort[i] + 1;
        }
      }
    }
  }
}