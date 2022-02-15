"use strick"

let _lstSiti

window.onload=function(){
  _lstSiti=document.getElementById("lstSiti")
  _lstSiti.selectedIndex=-1
}

function visualizza(){
  let url=_lstSiti.value
  //apre in una nuova scheda
  window.open(url, "_blank")
  //apro in una scheda corrente
  //window.open(url, "_self")
  //window.location.href=url
}

function generaNumero(a,b){
  let ris=Math.floor((b-a)*Math.random())+a
  return ris
}