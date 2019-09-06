var canvas;

const CFG = {
  icon_width : 20,
  icon_height: 25,
  min_pt_count: 2,
  max_pt_count: 4,
  axis_pt_count: 4,
  center_offset: 0.66,

  // For drawing multiple icons
  icon_margin: 50,
  l_h: 6
}

let icons = [];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();

  for (let i = 0; i < Math.pow(CFG.l_h, 2); i++) {
    icons.push( new Icon() );
  }

}

function draw() {

  background( 40 );
  
  let total_width = CFG.l_h * CFG.icon_width + (CFG.l_h - 1) * CFG.icon_margin;
  let total_height = CFG.l_h * CFG.icon_height + (CFG.l_h - 1) * CFG.icon_margin;
  translate( width/2 - total_width/2, height/2 - total_height/2 );
  
  for (let i = 0; i < icons.length; i++) {
    icons[i].drawPoints();
    icons[i].drawConnections();
    if ((i + 1) % CFG.l_h == 0 && i > 0) {
      translate( -total_width + CFG.icon_width, CFG.icon_height + CFG.icon_margin );
    } else {
      translate( CFG.icon_width + CFG.icon_margin, 0 );
    }
  }

}