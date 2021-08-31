class computerarcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
      Matter.body.setangle(this.body,-PI/2)
      if (move === "UP"&& computerarcher.body.angle < 1.77){
          angleValue = 0.1
      } else{
          angleValue = -0.1
      }

      if (move === "DOWN"&& computerarcher.body.angle > 1.77){
        angleValue = -0.1
    } else{
        angleValue = 0.1
    }





      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
  
      pop();
    }
  }