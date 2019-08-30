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
  background( 40 );
  strokeWeight( 3 );
  stroke( 255 );
  icon.points.forEach(pt => {
    point( pt.x, pt.y );
  });
}