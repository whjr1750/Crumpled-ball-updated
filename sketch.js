const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, bin, ball;

function setup(){
    createCanvas(windowWidth, windowHeight)

    //making the world (body in bodies in world in engine) | engine --> world --> bodies --> body, constraint, render
    engine = Engine.create();
    world = engine.world
    Engine.run(engine)

    //making the bodies
    ground = new Platform(windowWidth/2, windowHeight - 50, windowWidth, windowHeight/7);
    bin = new Bin(1030, 410);
    ball = new Ball(500, 420, 25);
    
} 

function draw(){
    background(255)

    ground.show();
    bin.show();
    ball.show();

    fill(0)
    textAlign(CENTER);
    text(Math.round(mouseX) + ", " + Math.round(mouseY), windowWidth/2, windowHeight/2);

}

function keyPressed(){
    
    if(keyCode === 32){
        console.log(ball)
        Body.applyForce(ball.body, ball.body.position, {x: 20, y: 20});
    }
}