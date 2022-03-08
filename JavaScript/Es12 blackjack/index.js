"use strick"
let _txtBanco
let _chkNum
let _txtNum
let _txtUser
let _btnBanco
let puntiGiocatore=0

window.onload=function(){
  _txtBanco=document.getElementById("txtBanco")
  _chkNum=document.getElementsByName("chkNum")
  _txtNum=document.getElementsByName("txtNum")
  _txtUser=document.getElementById("txtUser")
  _btnBanco=document.getElementById("btnBanco")

  let numero=generaNumero(1,11)
  _txtBanco.value=numero
}
function visualizza(pos){
  _chkNum[pos].disabled=true
  let numero=generaNumero(1,11)
  _txtNum[pos].value=numero
  puntiGiocatore+=numero
  _txtUser.value=puntiGiocatore
  if(puntiGiocatore>21){
    alert("Hai perso. La somma delle tue carte supera il valore 21")
    termina()
  }
}
function termina(){
  _btnBanco.disabled=true
  for(let i=0;i<_chkNum.lenght;i++){
    _chkNum[i].disabled=true
  }
}
function banco(){
  let carta=generaNumero(1,11)
  _txtBanco.value=parseInt(_txtBanco.value)+carta
  for(let i=0;i<_chkNum.lenght;i++){
    _chkNum[i].disabled=true
  }
  if(parseInt(_txtBanco.value)>21){
    alert("Il banco ha perso. Vince il giocatore")
    termina()
  }
  else if(parseInt(_txtBanco.value)>=17 && parseInt(_txtBanco.value)<=21){
    
    if(puntiGiocatore>parseInt(_txtBanco.value)){
      alert("Vince il giocatore")
    }
    else{
      alert("Vince il banco")
    }
    termina()
  }
}
function generaNumero(a,b){
  return Math.floor((b-a)*Math.random())+a
}