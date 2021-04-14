class Launcher {
    constructor(body,anchor)
    {
        var options = {
            bodyA:body,
            pointB:anchor,
            stinfness:0.005,
            length:1
        }

        this.bodyA = body;
        this.pointB = anchor;
        this.Launcher = Constraint.create(options);
        World.add(world,this.Launcher);

    }
    attach(body){
        this.Launcher.bodyA=body;
    }

    fly(){
this.Launcher.bodyA = null;

    }

    display(){
 if (this.Launcher.bodyA){
var pointA = this.bodyA.position;
var pointB = pointB;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
 }

    }
    

}