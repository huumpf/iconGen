class Icon {
  
  constructor() {
    this.points = this.makePoints();
    this.connections = this.makeConnections();
  }

  makePoints () {
    // Left and right side
    let pt_count = Math.floor( random( CFG.min_pt_count, CFG.max_pt_count ) );
    let points_left = [];
    let points_right = [];
    let points_center = [];
    for (let i = 0; i < pt_count; i++) {
      let pt_x = random( 0, CFG.icon_width * (CFG.center_offset / 2) );
      let pt_y = random( 0, CFG.icon_height );
      let pt_left = createVector( pt_x, pt_y );
      let pt_right = createVector( CFG.icon_width - pt_x , pt_y );
      points_left.push( pt_left );
      points_right.push( pt_right );
    }
    // Center axis
    let y_inc = CFG.icon_height / (CFG.axis_pt_count - 1);
    for (let i = 0; i < CFG.axis_pt_count; i++) {
      let pt = createVector( CFG.icon_width / 2, i * y_inc );
      points_center.push( pt );
    }

    return { left: points_left, right: points_right, center: points_center };
  }

  makeConnections() {
    let connections = [];
    for (let i = 0; i < this.points.left.length; i++) {
      var toCenter = Math.random() >= 0.5;
      if (toCenter) {
        let rand_i = floor( random( 0, this.points.center.length ) );
        connections.push( [ this.points.left[i], this.points.center[rand_i] ] );
        connections.push( [ this.points.right[i], this.points.center[rand_i] ] );
      } else {
        let rand_i = floor( random( 0, this.points.left.length ) );
        if ( rand_i == i ) rand_i = floor( random( 0, this.points.left.length ) );
        connections.push( [ this.points.left[i], this.points.right[rand_i] ] );
        connections.push( [ this.points.right[i], this.points.left[rand_i] ] );
      }
    }
    return connections;
  }

  drawConnections() {
    noFill();
    strokeWeight( CFG.line_width );
    stroke( 0 );
    for (let i = 0; i < this.connections.length; i++) {
      line( this.connections[i][0].x, this.connections[i][0].y, this.connections[i][1].x, this.connections[i][1].y );
    }
  }

  drawPoints() {
    noFill();
    strokeWeight( CFG.dot_size );
    stroke( 0 );
    for ( let pt of this.points.left ) {
      point( pt.x, pt.y );
    }
    for ( let pt of this.points.right ) {
      point( pt.x, pt.y );
    }
    for ( let pt of this.points.center ) {
      point( pt.x, pt.y );
    }
  }

}