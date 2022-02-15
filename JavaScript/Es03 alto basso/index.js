"ose strict"

let numeroSegreto
let _divMessage
let _txtNumero
let _btnGioca
let _divTentativi
let cont=0

function init(){
  numeroSegreto=generaNumero(1,101)
  _txtNumero=document.getElementById("txtNumero")
  _divMessage=document.getElementById("divMessage")
  _btnGioca=document.getElementById("btnGioca")
  _divTentativi=document.getElementById("divTentativi")
  console.log("ns->"+numeroSegreto)
}
function gioca(){
  if(_txtNumero.value==""){
    alert("Inserire un Numero")
  }
  else{
      let numeroUtente=parseInt(_txtNumero.value)
      let vinto=false
      console.log("nu->"+numeroUtente)
    if(numeroUtente>numeroSegreto)
    {
      _divMessage.innerHTML+="Il numero "+ numeroUtente+" è troppo grande"
      cont++
    }
    else if(numeroUtente<numeroSegreto)
    {
      _divMessage.innerHTML+="Il numero "+numeroUtente+" è troppo piccolo<br>"
      cont++
    }
    else
    {
      cont++
      vinto=true
      alert("Bravo hai indovinato in "+cont+" tentativi")
      _btnGioca.disabled=true
      window.location.reload()
    }
    _divTentativi.textContent="Tentativi:"+cont 
    if(cont==10 && !vinto)
    {
      alert("Hai perso tentativi troppo alti: "+cont)
      _btnGioca.disabled=true
      cont=0
      window.location.reload()
    }
  }
  
}
function generaNumero(a,b){
  let ris=Math.floor((b-a)*Math.random())+a
  return ris
}