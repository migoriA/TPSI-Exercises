"use strict";

let vet=[]

window.onload = function(){
  let _img = document.getElementById("imgCarta");
	let _btnGioca = document.getElementById("btnGioca");
	let _lblSomma = document.getElementById("lblSomma");
	let _lblCarte = document.getElementById("lblCarte");
	let _lblRisultato = document.getElementById("lblRisultato");
	
	_btnGioca.addEventListener("click",function(){
		_btnGioca.disabled = true;
		setTimeout(gioca, 1000)
	})
	function gioca(){
		let numero=0
		do{
			numero=generaNumero(1,11)
		}while(vet.includes(numero))
		vet.push(numero)
		_img.src="img/bg_d"+numero+".gif"
		if(numero>7){
			numero=0.5
		}
		_lblSomma.innerHTML= parseFloat(_lblSomma.innerHTML)+numero
		_lblCarte.innerHTML= parseInt(_lblCarte.innerHTML)+1
		if(_lblCarte.innerHTML<"3"){
			setTimeout(gioca,1000)
		}
		else{
			if(parseFloat(_lblSomma.innerHTML)<=7.5){
				_lblRisultato.innerHTML="Hai vinto"
			}
			else{
				_lblRisultato.innerHTML="Hai perso"
			}
			setTimeout(function(){
				_btnGioca.disabled=false
				_lblSomma.innerHTML="0"
				_lblCarte.innerHTML="0"
				_lblRisultato.innerHTML=""
				_img.src=" "
				vet=[]
			},2000)
		}
	}
}


function generaNumero(min, max){
    let rnd = Math.floor((max - min) * Math.random()) + min;   
    return rnd;
}