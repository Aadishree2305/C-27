class Ball {
     constructor(x,y){
          var options={
            restitution : 1,
            isStatic : false,
          }
          this.x=x;
          this.y=y;
          this.r=20;
          this.body =Bodies.circle(x,y,20,options);
          World.add(world,this.body);

        }
      
        display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
        }
      }   
