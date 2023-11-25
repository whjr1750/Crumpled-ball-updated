class Platform{
    constructor(x, y, w, h){
        var options = {
            isStatic: true,
            friction:1,
            restitution:0
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.platform = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.platform);
    }

    show(){
        var x = this.platform.position.x;
        var y = this.platform.position.y;

        push();
        rectMode(CENTER)
        rect(x, y, this.w, this.h);
        pop();
    }
}