var canvas;

const CFG = {
  size : 30,
  count : 25,
  pointCount : 20
}

let icon;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();

  icon = new Icon();
}

function draw() {
  translate( width/2, height/2 );
  background( 40 );
  strokeWeight( 1 );
  stroke( 255 );
  // icon.drawPoints();
  icon.drawShape();
}