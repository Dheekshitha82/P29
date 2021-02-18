class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(color = "brown"){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(color);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
