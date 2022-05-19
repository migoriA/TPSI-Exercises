'use strict'
const DIM = 10;
const GRIGIO = "rgb(127, 127, 127)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";

var x;
var y;
let cnt=0

window.onload=function(){
  let _wrapper=document.getElementById("wrapper")

  for(let i=0;i<DIM;i++){
    for(let j=0;j<DIM;j++){
      let button = document.createElement("button");
      button.innerHTML="&nbsp;"
      button.id=i+"-"+j
      button.classList.add("puls")
      button.style.backgroundColor=GRIGIO
      button.addEventListener("click",visualizzaMuro)
      _wrapper.appendChild(button)
    }
  }
  x=generaNumero(0,DIM)
  y=generaNumero(0,DIM)
  let bomba=document.getElementById(x+"-"+y)
  bomba.style.backgroundImage="url(bomba.png)"
  let timerId=setInterval(visualizzaBomba,1500)

  function visualizzaBomba(){
    cnt++
    let dir=generaNumero(0,4)
    let oldX=x
    let oldY=y
    
    switch(dir){
      case 0:
        if(x>0){
          x--
        }
        break
      case 1:
        if(x<9){
          x++
        }
        break
      case 2:
        if(y<9){
          y++
        }
        break
      case 3:
        if(y>0){
          y--
        }
        break
    }
    bomba=document.getElementById(x+"-"+y)
    if(bomba.style.backgroundColor!=BLU){
      let _oldBomba=document.getElementById(oldX+"-"+oldY)
      bomba.style.backgroundImage="url(bomba.png)"
      _oldBomba.style.backgroundImage=""
      cnt=0
    }
    else{
      x=oldX
      y=oldY
    }
    if(cnt==20){
      alert("Hai vinto!!!")
      reset()
    }
    
  }

  function visualizzaMuro(){
    if(this.style.backgroundImage!=""){
      alert("Hai perso")
      clearInterval(timerId)
      reset()
    }
    else if(this.style.backgroundColor==GRIGIO){
      this.style.backgroundColor=BLU
    }
    else if(this.style.backgroundColor==BLU){
      this.style.backgroundColor=GRIGIO
    }
  }
  function reset(){
    for(let i=0;i<DIM;i++){
      for(let j=0;j<DIM;j++){
        let btn=document.getElementById(i+"-"+j)
        btn.disabled=true
      }
    }
  }
  
}

function generaNumero(a,b){
  return Math.floor((b-a)*Math.random())+a
}
