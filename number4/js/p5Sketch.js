let steps=0;
let maxSteps = 8;

function setup () {
    createCanvas(600, 200);
}

function draw () {
    background(204);

      text ("click to begin", width -360, height -100);
      fill("#000000")
//   arrow
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
fill("#770000")
for(let i =0; i <steps; i++){
    rect(i * sectionWidth, 0, sectionWidth, height);
}



if (steps>=maxSteps) {
    textSize(16);
    fill("#FFFFFF");
    text ("State Complete", width -360, height -100);
}
}

function mousePressed() {
    if(steps <maxSteps){
        steps += 1;
    }
}






























// function setup() {
//     createCanvas(600, 400);
//                background(0);
// }

// function draw() {

//     // direct manupulation

//     ellipse(mouseX, mouseY, 60)
//         rect(mouseX, mouseY, 60)
    

//     // // constraint
//     //     let x = constrain(mouseX, 100, 500);

//     //     ellipse(x, 200, 50, 50)

// }