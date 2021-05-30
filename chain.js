class chain{
constructor(bodyA, bodyB){
var options={bodyA:bodyA, bodyB:bodyB, length:40, stiffness:1}
this.body=Constraint.create (options)
World.add (world, this.body)


this.bodyA=bodyA
this.bodyB=bodyB

}
display(){
    var pointA=this.body.bodyA.position
    var pointB=this.body.bodyB.position
stroke ("gray")
line (pointA.x, pointA.y, pointB.x, pointB.y)



}








}