// computer code
function num() {
  var r = Math.random();
  r = parseInt((r = r * (4 - 1) + 1));
  if (r == 1) {
    document.getElementById("c-rock-img").style.display = "block";
    document.getElementById("c-paper-img").style.display = "none";
    document.getElementById("c-sissor-img").style.display = "none";
  } else if (r == 2) {
    document.getElementById("c-paper-img").style.display = "block";
    document.getElementById("c-rock-img").style.display = "none";
    document.getElementById("c-sissor-img").style.display = "none";
  } else {
    document.getElementById("c-sissor-img").style.display = "block";
    document.getElementById("c-paper-img").style.display = "none";
    document.getElementById("c-rock-img").style.display = "none";
  }
}

// comp img get 
var cRock=document.getElementById("c-rock-img");
var cPaper=document.getElementById("c-paper-img");
var cSissor=document.getElementById("c-sissor-img");
var cScore=0;
var uScore=0;


// result code 
function uWon(){
    uScore=uScore+1;
    document.getElementById("u-score").innerHTML=uScore;
}
function uLost(){
    cScore=cScore+1;
    document.getElementById("c-score").innerHTML=cScore;
}
function Draw(){
    cScore=cScore+1;
    document.getElementById("c-score").innerHTML=cScore;
    uScore=uScore+1;
    document.getElementById("u-score").innerHTML=uScore;
}
  // user code

  // user rock functiom 
function rock() {

  document.getElementById("u-rock-img").style.display = "block";
  document.getElementById("u-paper-img").style.display = "none";
  document.getElementById("u-sissor-img").style.display = "none";
  var nn= document.getElementById("u-rock-img");
  num();

// result code
if(cRock.style.display=="block"){
   document.getElementById("res").innerHTML="Draw";
   Draw()
}
else if(cPaper.style.display=="block"){
    document.getElementById("res").innerHTML="You Lost";
    uLost();
 }
else{
    document.getElementById("res").innerHTML="You Won";
    uWon();
}
}

  // user paper functiom 

function paper() {
  document.getElementById("u-paper-img").style.display = "block";
  document.getElementById("u-rock-img").style.display = "none";
  document.getElementById("u-sissor-img").style.display = "none";
  num();
  // result code
if(cPaper.style.display=="block"){
    document.getElementById("res").innerHTML="Draw";
    Draw();
 }
 else if(cSissor.style.display=="block"){
     document.getElementById("res").innerHTML="You Lost";
     uLost();
  }
 else{
     document.getElementById("res").innerHTML="You Won";
     uWon();
 }

  
}

  // user sissor functiom 


function sissor() {
  document.getElementById("u-sissor-img").style.display = "block";
  document.getElementById("u-paper-img").style.display = "none";
  document.getElementById("u-rock-img").style.display = "none";

  num();
  // result code
if(cSissor.style.display=="block"){
    document.getElementById("res").innerHTML="Draw";
    Draw();
 }
 else if(cRock.style.display=="block"){
     document.getElementById("res").innerHTML="You Lost";
     uLost();
  }
 else{
     document.getElementById("res").innerHTML="You Won";
     uWon();
 }
}


