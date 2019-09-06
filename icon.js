class Icon {
  
  constructor() {
    this.radius = CFG.size / 2;
    this.center = createVector( CFG.size / 2, CFG.size / 2 );
    this.points = this.makePoints();
    this.vertices = this.makeVertices();
  }

  makePoints () {
    let points = [];
    let angle = 0;
    for ( let i = 0; i < CFG.pointCount; i++) {
      let pt = new p5.Vector.fromAngle( angle );
      pt = pt.setMag( this.radius );
      pt.add(this.center);
      points.push( pt );
      angle += TWO_PI / CFG.pointCount;
    }
    // console.log( points );
    return points;
  }

  makeVertices() {
    let vertices = [];
    for (let i = 0; i < 7; i++) {
      let rand_i = Math.floor(random( 0, this.points.length ));
      vertices.push( this.points[rand_i] );
    }
    return vertices;
  }

  drawPoints() {
    for ( let pt of this.points ) {
      noFill();
      strokeWeight( 1 );
      stroke( 255 );
      point( pt.x, pt.y );
    }
  }

  drawShape() {
    noStroke();
    fill( 255 );
    beginShape();
    for ( let vert of this.vertices ) {
      vertex( vert.x, vert.y );
    }
    endShape( CLOSE );
  }

}