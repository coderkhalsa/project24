class Ball {
  constructor(x,y,width,height){
    var options = {
    isStatic : false,
    restituion:0.3,
    friction:0.5,
    density:1.2
    
    }
  
  this.body = Bodies.circle(200,500, 5, [options] )
 World.add(this.body,world)
  }

display(){
  
  ellipseMode(CENTER);
  fill("dark pink")
  ellipse(200,500,5)
 
}

}