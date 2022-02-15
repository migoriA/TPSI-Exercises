"use strick"
let cont=[]
let _txtLanci
let _pMsg

function init() {

  _txtLanci=document.getElementById("txtLanci")
  _pMsg=document.getElementsByName("msg")
  //inizializzazione del vettore
  for(let i=0;i<6;i++)
  {
    cont.push(0)
  }
  console.log(cont)
}

function genera(){
  let lanci=_txtLanci.value

  for(let i=0;i<6;i++){
    cont[i]=0
  }
  for(let i=0;i<lanci;i++){
    let n=generaNumero(1,7)
    cont[n-1]++
  }
  console.log(cont)
  for(let i=0;i<6;i++){
    _pMsg[i].innerHTML = (i+1)+" uscito "+cont[i]+" volte"
  }
}

function generaNumero(a,b){
  let ris=Math.floor((b-a)*Math.random())+a
  return ris
}