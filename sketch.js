var canvas;

const CFG = {
  icon_width : 48,
  icon_height: 48,
  min_pt_count: 2,
  max_pt_count: 4,
  axis_pt_count: 4,
  center_offset: 0.66,

  // Draw
  dot_size: 4,
  line_width: 1,

  icon_margin: 12 

}

let icon;

function setup() {
  let canvas_width = CFG.icon_width + 4 * CFG.icon_margin;
  let canvas_height = CFG.icon_height + 4 * CFG.icon_margin;
  canvas = createCanvas( canvas_width, canvas_height );
  noLoop();
  smooth();
  colorMode( HSB );

  icon = new Icon();

}

function draw() {

  translate( CFG.icon_margin * 2, CFG.icon_margin * 2 );

  icon.drawPoints();
  icon.drawConnections();

}

function keyPressed() {
  if (key === " ") {
    save("icon.svg");
  }
}