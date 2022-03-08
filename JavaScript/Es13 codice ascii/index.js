"use strick"

let _lstVoci
window.onload=function(){
  _lstVoci=document.getElementById("voci")


  _lstVoci.selectedIndex=-1
}

function genera(){
  let value=_lstVoci.value
  let vet=value.split("-")
  let min=vet[0]
  let max=vet[1]
  let aus=[]
  let cnt=0
  for(let i=min;i<max;i++){
    aus[cnt]=i
    cnt++
  }
  for(let i=0;i<6;i++){
    let pos=generaNumero(0,aus.length)
    
  }
  
}
function generaNumero(a,b){
  return Math.floor((b-a)*Math.random)+a
}