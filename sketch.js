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

  // For drawing multiple icons
  icon_margin: 48,
  disciplines: 25,
  min_skills: 6,
  max_skills: 12
}

let skills = [];

function setup() {
  // CFG.icon_width = (window.innerHeight - 4*CFG.icon_margin - CFG.max_skills*(CFG.icon_margin-1)) / CFG.max_skills;
  // CFG.icon_height = (window.innerHeight - 4*CFG.icon_margin - CFG.max_skills*(CFG.icon_margin-1)) / CFG.max_skills;
  let canvas_width = CFG.disciplines * CFG.icon_width + (CFG.disciplines + 3) * CFG.icon_margin;
  let canvas_height = CFG.max_skills * CFG.icon_height + (CFG.max_skills + 3) * CFG.icon_margin;
  canvas = createCanvas( canvas_width, canvas_height );
  noLoop();
  smooth();
  colorMode( HSB );


  for (let i = 0; i < CFG.disciplines; i++) {
    let skill_count = floor( random( CFG.min_skills, CFG.max_skills + 1 ) );
    skills[i] = [];
    for (let j = 0; j < skill_count; j++) {
      skills[i].push( new Icon() );
    }
  }
}

function draw() {

  background( 9 );
  
  translate( CFG.icon_margin * 2, CFG.icon_margin * 2 );

  for (let i = 0; i < skills.length; i++) {
    for (let j = 0; j < skills[i].length; j++) {
      skills[i][j].drawPoints( i );
      skills[i][j].drawConnections( i );
      translate( 0, CFG.icon_height + CFG.icon_margin );
    }
    translate( CFG.icon_width + CFG.icon_margin, -CFG.icon_height * skills[i].length + -CFG.icon_margin * skills[i].length );
  }

}