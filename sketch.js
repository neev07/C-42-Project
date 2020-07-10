var canvas;

function setup() {
  canvas = createCanvas(400,400);
}

function draw() {
  background("white");  
  text("The time is shown in console",200,200);
  getData();
}

async function getData(){
  var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responeJSON = await response.json();

  var datetime = responeJSON.datetime;
  var hour = datetime.slice(11,13);
  var minute = datetime.slice(14,16);
  var second = datetime.slice(17,19);
  console.log(hour + ":" + minute + ":" + second);
}