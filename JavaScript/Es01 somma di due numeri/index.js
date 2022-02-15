"use strict"

function somma(){
  let _txtN1=document.getElementById("txtN1");
  let _txtN2=document.getElementById("txtN2");
  let _txtRis=document.getElementById("txtRis");
  //getElementsByTagName restituisce un vettore numerativo lungo 1 perchè nella pagina c'è solo uno span
  let _span=document.getElementsByTagName("span") [0];

  let n1=parseInt(_txtN1.value);
  let n2=parseInt(_txtN2.value);
  console.log("n1=",n1);
  console.log("n2=",n2);
  let ris=n1+n2;
  console.log("ris=",ris);
  //visualizzo il risultato
  _txtRis.value=ris;
  _span.textContent=ris;
  alert(ris);
}