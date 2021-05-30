class ball{

    constructor(x,y,r,c){
    this.x=x
    this.y=y
    this.r=r
    this.c=c
    //Matter.Bodies.rectangle(x, y, width, height, [options])
    this.bodies=Bodies.circle(x,y,r, {isStatic:false, restitution:0.6, friction:0.5, density:0.3} )
    World.add(world, this.bodies)
    
    
    
    
    }
    display(){
    ellipseMode(CENTER)
    fill (this.c)
    ellipse (this.bodies.position.x, this.bodies.position.y, this.r, this.r)
    
    }
    
    
    
    
    
    }