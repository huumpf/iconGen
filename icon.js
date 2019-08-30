class Icon {
  
  constructor() {
    this.points = this.makePoints();
    this.radius = CFG.size / 2;
    console.log( "radius is " + this.radius );
    this.center = new p5.Vector( CFG.size / 2, CFG.size / 2 );
  }

  makePoints () {
    let points = [];
    let angle = 0;
    for ( let i = 0; i < CFG.pointCount; i++) {
      let pt = new p5.Vector.fromAngle( angle );
      // pt = pt.setMag( this.radius );
      pt += this.center;
      console.log( pt );
      points.push( pt );
      angle += TWO_PI / CFG.pointCount;
    }
    // console.log( points );
    return points;
  }

}