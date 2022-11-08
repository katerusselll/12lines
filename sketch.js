let mic;
// boolean to store value of started
let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 13;
  let EllipseY = height / 4;
  let EllipseSize = vol;

  let EllipseX2 = width / 101;
  let EllipseY2 = height / 4;
  
    //Other 72 lines
  //row 1
  drawOtherEllipse(EllipseX2, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 2, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 3, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 4, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 5, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 6, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 7, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 8, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 9, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 10, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 11, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 12, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 13, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 14, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 15, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 16, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 17, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 18, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 19, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 20, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 21, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 22, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 23, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 24, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 25, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 26, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 27, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 28, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 29, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 30, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 31, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 32, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 33, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 34, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 35, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 36, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 37, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 38, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 39, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 40, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 41, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 42, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 43, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 44, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 45, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 46, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 47, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 48, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 49, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 50, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 51, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 52, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 53, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 54, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 55, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 56, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 57, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 58, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 59, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 60, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 61, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 62, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 63, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 64, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 65, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 66, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 67, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 68, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 69, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 70, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 71, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 72, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 73, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 74, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 75, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 76, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 77, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 78, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 79, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 80, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 81, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 82, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 83, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 84, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 85, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 86, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 87, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 88, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 89, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 90, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 91, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 92, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 93, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 94, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 95, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 96, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 97, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 98, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 99, EllipseY2, EllipseSize);
  drawOtherEllipse(EllipseX2 * 100, EllipseY2, EllipseSize);

  
  //if(started == false){
    //textAlign(CENTER)
    //text("please click", width/2, height/2)
  function drawOtherEllipse(EllipseX2, EllipseY2, EllipseSize){
    fill(100);
    ellipse(EllipseX2, EllipseY2, random(vol * 5), random(vol * 5000));
    
  }
  //row1
  drawEllipse(EllipseX, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY, EllipseSize);
  //row2
  drawEllipse(EllipseX, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY * 2, EllipseSize);
  //row3
  drawEllipse(EllipseX, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 12, EllipseY * 3, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    ellipse(EllipseX, EllipseY, random(vol * 20), random(vol * 5000));
    // console.log(started);
    //look up lerp for smoothness
  }
  

}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
function mousePressed() {
  started = true
  userStartAudio();
}
