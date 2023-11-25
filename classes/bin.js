class Bin{
    constructor(x, y){
        var options = {
            isStatic: true,
            friction: 1,
            restitution: 0,
            density:1
        }

        this.w = 20;
        this.h = 120;
        this.leftWall = Bodies.rectangle(x, y, 20, 120, options);
        this.rightWall = Bodies.rectangle(x+150, y, 20, 120, options);
        this.bottomWall = Bodies.rectangle(x+75, y+71, 170, 20, options);
        World.add(world, [this.leftWall, this.rightWall, this.bottomWall]);
    }

    show(){
        var xL = this.leftWall.position.x;
        var yL = this.leftWall.position.y;
        var xR = this.rightWall.position.x;
        var yR = this.rightWall.position.y;
        var xB = this.bottomWall.position.x;
        var yB = this.bottomWall.position.y;

        push();
        rectMode(CENTER)
        stroke("red")
        fill("red")
        rect(xL, yL, this.w, this.h);
        rect(xR, yR, this.w, this.h);
        rect(xB, yB, 170, 20);
        pop();
    }
}