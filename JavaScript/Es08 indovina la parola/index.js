"use strick"

let vet=["Italia","Pizzeria","Calcio","Automobilismo","Juventus","Lamborghini","Lavagna","Lasagna","Lampadario","Finestra"]
let parolaSegrata
let punti=100
let _txtPunti
let _txtCar
let _chkRis
let _btnInvia
let _btnRisposta
let _txtIns

function inizializza(){
  let pos=generaNumero(0,vet.length)

  parolaSegrata=vet[pos]
  parolaSegrate=parolaSegrata.toUpperCase()

  _txtPunti=document.getElementById("txtPunti")
  _txtPunti.value=punti
  _txtCar=document.getElementsByName("txtCar")
  _chkRis=document.getElementsByName("chkRis")
  _btnInvia=document.getElementById("btnInvia")
  _btnRisposta=document.getElementById("btnRisposta")
  _txtIns=document.getElementById("txtIns")

  for(let i=0;i<_txtCar.length;i++){
    _txtCar[i].readOnly=true
    _chkRis[i].disabled=true
    _chkRis[i].checked=false

    if(i<parolaSegrata.length){
      _txtCar[i].value="*"
    }
    _btnInvia.disabled=false
    _btnRisposta.disabled=false
  }
  console.log(parolaSegrata)
}
function confronta(){
  let lettera=_txtIns.value

  lettera=lettera.toUpperCase()
  for(let i=0;i<parolaSegrata.length;i++){
    if(lettera==parolaSegrata[i]){
      _txtCar[i].value=lettera
      _chkRis[i].checked=true
    }
  }
  punti-=5
  _txtPunti.value=punti
  if(punti<=0){
    alert("Hai perso")
    _btnInvia.disabled=true
    _btnRisposta.disabled=true
  }
  else{
    let cnt=0
    for(let i=0;i<parolaSegrata.length;i++){
      if(_chkRis[i].checked==true){
        cnt++
      }
    }
    if(cnt==parolaSegrata.length){
      alert("Hai vinto")
      _btnInvia.disabled=true
      _btnRisposta.disabled=true
    }
  }
  
  
}

function generaNumero(a,b){
  let ris=Math.floor((b-a)*Math.random())+a
  return ris
}