class Ball{
    constructor(x, y, r){
        var options = {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2     //updated the properties
        }

        this.x = x;
        this.y = y;
        this.r  = r*2;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }

    show(){
        var paperpos=this.body.position;
        push();
        ellipseMode(CENTER)
        fill("#AC7AA5")
        translate(paperpos.x, paperpos.y)
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}