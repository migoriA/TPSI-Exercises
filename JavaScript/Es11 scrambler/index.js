"use strick"
let vet1=[]
let vet2=[]
let aus=[]
let _txt1
let _txt2

window.onload=function(){
  _txt1=document.getElementById("txt1")
  _txt2=document.getElementById("txt2")
  for(let i=65;i<=90;i++){
    let char=String.fromCharCode(i)
    vet1[i-65]=char
    aus[i-65]=char
  }
  console.log(vet1)
  for(let i=0;i<vet1.length;i++){
    let pos=generaNumero(0,aus.length)
    vet2[i]=aus[pos]
    aus.splice(pos,1)
  }
  console.log(vet2)
}
function scrambler(){
  _txt2.value=""
  _txt1.value=_txt1.value.toUpperCase()
  for(let i=0;i<_txt1.value.length;i++){
    let char1=_txt1.value[i]
    let pos=vet1.indexOf(char1)
    let char2
    if(pos!=-1){
      char2=vet2[pos]
    }
    else{
      char2=char1
    }
    _txt2.value+=char2
    //_txt2.value[i]=char2 giusto come ragionamento ma non si puo scrivere cosi
  }
}
function descrambler(){
  _txt1.value=""
  for(let i=0;i<_txt2.value.length;i++){
    let char1=_txt2.value[i]
    let pos=vet2.indexOf(char1)
    let char2
    if(pos!=-1){
      char2=vet1[pos]
    }
    else{
      char2=char1
    }
    _txt1.value+=char2
  }
}

function generaNumero(a,b){
  return Math.floor((b-a)*Math.random())+a
}