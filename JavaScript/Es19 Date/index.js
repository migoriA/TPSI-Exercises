"use strick"

window.onload=function(){
  let _txtNPartecipanti=document.getElementById("txtNPartecipanti")
  let _txtDataInizio=document.getElementById("txtDataInizio")
  let _txtDataFine=document.getElementById("txtDataFine")
  let _btnCalcola=document.getElementById("btnCalcola")
  let _risultato=document.getElementById("risultato")
  let _imgSconto=document.getElementById("imgSconto")

  let today=new Date()
  _txtDataInizio.min=today.toISOString().substr(0,10)
  _txtDataFine.disabled=true

  _txtDataInizio.addEventListener("change", function(){
    let dataInizio=_txtDataInizio.value
    console.log(dataInizio)
    dataInizio=new Date(dataInizio)
    if(dataInizio.getMonth()==5){
      _imgSconto.src="img/sconto20.jpg"
    }
    else if(dataInizio.getMonth()==6){
      _imgSconto.src="img/sconto15.jpg"
    }
    else if(dataInizio.getMonth()==7){
      _imgSconto.src="img/sconto10.jpg"
    }
    let dataFineMin=dataInizio.getTime()+(24*3600*1000)
    dataFineMin=new Date(dataFineMin)
    _txtDataFine.min=dataFineMin.toISOString().substr(0,10)
    _txtDataFine.disabled=false
  })
  _btnCalcola.addEventListener("click",function(){
    let nPersone=_txtNPartecipanti.value
    let importoUnitario=200;

    if(nPersone=="" || nPersone<1 || nPersone>9){
      alert("Numero peartecipanti non validi")
    }
    else if(_txtDataInizio.value=="" || _txtDataFine.value==""){
      alert("Inserire data fine data inizio")
    }
    else{
      let msec=new Date(_txtDataFine.value)-new Date(_txtDataInizio.value)
      let giorni=msec/(24*3600*1000)
      let importo=(giorni*importoUnitario*nPersone)
      _risultato.innerHTML=importo+"€"
    }
  })
}

function generaNumero(a,b){
  return Math.floor((b-a)*Math.random())+a
}