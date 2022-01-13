const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var world,engine;
var chao;
var caixa;
var caixa2;
var porco;
var tronco;
var t2;
var t3;
var passaro;
var x;
var y;
var troncoLig;
var corda;
var bg;
var bg1 = "bg.png"
var chao2;
var modo = "preso";
var score = 0;

function preload(){

 // bg = loadImage("bg.png");

  getTime();

}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();

  world = engine.world;

  chao = new Chao(width/2,390,width,30);
  chao2 = new Chao(150,300,300,150);

  caixa = new Box(520,325,50,50);
  caixa2 = new Box(650,325,50,50);

  porco = new Pig(585,280);

  tronco = new Log(585,310,120,PI/2);
  t1 = new Log(525,250,120,PI);
  t2 = new Log(655,250,120,PI);
  troncoLig = new Log(100,100,80,PI/2);

  passaro = new Bird(100,250);

  corda = new SlingShot(passaro.body,{x:200,y:50});

  console.log(chao);  
  console.log(porco);
  
  

}

function draw() {
  if(bg){
    background(bg);  
  }

  Engine.update(engine);

  x = mouseX;
  y = mouseY;
  text(x + "," + y, mouseX,mouseY);

  textSize(30);
  fill("rgb(10)");
  text("score: " + score,1000,40)

  caixa.display();
  caixa2.display();
  chao.display();
  chao2.display();
  porco.display();
  tronco.display();
  t1.display();
  t2.display();
  passaro.display();
  troncoLig.display();
  corda.display();

  porco.score();
  console.log(score);

  

}

function mouseDragged(){
  if(modo !== "solto"){
    Matter.Body.setPosition(passaro.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
   corda.soltar();
   modo = "solto"
}
function keyPressed(){
  if(keyCode === 32){
    corda.voltar(passaro.body);
  }
}

async function getTime(){
  
  var resposta = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var respostaJSON = await resposta.json()
  console.log(respostaJSON.datetime);
  var datetime = respostaJSON.datetime
  var hour = datetime.slice(11,13)

  if(hour>= 6 && hour <= 18){
    bg1 = "bg.png"
  }
  else{
    bg1 = "bg2.jpg"
  }

  bg = loadImage(bg1);

}
