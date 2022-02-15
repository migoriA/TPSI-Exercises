"use strick"

let vet=[]
let aus=[1,2,3,4,5]
let _txtNum
let _chkNum
let _btnInvia

function init(){
  _txtNum=document.getElementsByName("txtNum")
  _chkNum=document.getElementsByName("chkNum")
  _btnInvia=document.getElementById("btnInvia")
  for(let i=0;i<5;i++){
    let pos=generaNumero(0,aus.length)
    vet[i]=aus[pos]
    //vet.push(aus[pos])
    aus.splice(pos,1) //elimina la cella del vettore
  }
  console.log(vet)
}
function invia(){
  let cont=0
  for(let i=0;i<5;i++){
    if(vet[i]==_txtNum[i].value){
      _chkNum[i].checked=true
      cont++;
    }
    else{
      _chkNum[i].checked=false
    }
  }
  if(cont==5){
    alert("Hai vinto!!!! :)")
    for(let i=0;i<5;i++){
      _chkNum[i].disabled=true
      _txtNum[i].disabled=true
    }
    _btnInvia.disabled=true
  }
}

function generaNumero(a,b){
  let ris=Math.floor((b-a)*Math.random())+a
  return ris
}