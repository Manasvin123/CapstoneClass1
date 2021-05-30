class crane{

    constructor(x,y,w,h,c){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.c=c
    //Matter.Bodies.rectangle(x, y, width, height, [options])
    this.bodies=Bodies.rectangle(x,y,w,h, {isStatic:true, restitution:0.6, friction:0.5, density:0.3} )
    World.add(world, this.bodies)
    
    
    
    
    }
    display(){
    rectMode(CENTER)
    fill (this.c)
    rect (this.bodies.position.x, this.bodies.position.y, this.w, this.h)
    
    }
    
    
    
    
    
    }