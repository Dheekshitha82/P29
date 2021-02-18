const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Stand(600,400,1200,20);

    stand1 = new Stand(300,275, 30, 40)
    stand2 = new Stand(330,275, 30, 40)
    stand3 = new Stand(360,275, 30, 40)
    stand4 = new Stand(390,275, 30, 40)
    stand5 = new Stand(420,275, 30, 40)
    stand6 = new Stand(450,275, 30, 40)
    stand7 = new Stand(480,275, 30, 40)

    stand8 = new Stand(330,235, 30, 40)
    stand9 = new Stand(360,235, 30, 40)
    stand10 = new Stand(390,235, 30, 40)
    stand11 = new Stand(420,235, 30, 40)
    stand12 = new Stand(450,235, 30, 40)

    stand13 = new Stand(360,195, 30, 40)
    stand14 = new Stand(390,195, 30, 40)
    stand15 = new Stand(420,195, 30, 40)

    stand16 = new Stand(390,155, 30, 40)
}

function draw(){
    background("gray");
    Engine.update(engine);

    stand.display("red");
    stand1.display("lightblue");
    stand2.display("lightblue");
    stand3.display("lightblue");
    stand4.display("lightblue");
    stand5.display("lightblue");
    stand6.display("lightblue");
    stand7.display("lightblue");

    stand8.display("pink");
    stand9.display("pink");
    stand10.display("pink");
    stand11.display("pink");
    stand12.display("pink");

    stand13.display("lightgreen");
    stand14.display("lightgreen");
    stand15.display("lightgreen");

    stand16.display("white");
    textSize(20);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 150, 100);
}
