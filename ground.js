class ground{

constructor(x,y,w,h){
this.x=x
this.y=y
this.w=w
this.h=h
//Matter.Bodies.rectangle(x, y, width, height, [options])
this.bodies=Bodies.rectangle(x,y,w,h, {isStatic:true} )
World.add(world, this.bodies)




}
display(){
rectMode(CENTER)
fill ("green")
rect (this.bodies.position.x, this.bodies.position.y, this.w, this.h)

}





}