"use strict"

var matrice = [
				["0", "1", "2", "3", "4", "5"],   
				["6", "7", "8", "9", "A", "B"], 
				["C", "D", "E", "F", "G", "H"], 
				["I", "J", "K", "L", "M", "N"],
				["O", "P", "Q", "R", "S", "T"],
				["U", "V", "W", "X", "Y", "Z"]   ];


// vettori dove salvare i 5 numeri generati 
var nSegreti = new Array(5);    
let captcha=""   

window.onload = function(){
	captcha=""
	
	let _txtUser = document.getElementById("txtUser");
	let _txtPwd = document.getElementById("txtPwd");
	let _txtCaptcha = document.getElementById("txtCaptcha");
	let _divsCaptcha =  document.getElementsByClassName("captcha");
	let _img=document.getElementById("imgOk")
	let _btnControllaCaptcha = document.getElementById("btnControllaCaptcha")
	let _btnGeneraCaptcha = document.getElementById("btnGeneraCaptcha")
	let _btnInvia = document.getElementById("btnInvia")


	generaCaptcha()
	_txtUser.addEventListener("change", controllaUser)
	_txtPwd.addEventListener("change", controllaPaw)
	_btnControllaCaptcha.addEventListener("click",function(){
		if(_txtCaptcha.value==captcha){
			_img.src="img/ok.png"
			_btnControllaCaptcha.disabled=true
			_btnGeneraCaptcha.disabled=true
			_txtCaptcha.disabled=true
		}
		else{
			_img.src="img/nok.png"
			generaCaptcha()
		}
	})
	_btnInvia.addEventListener("click",function(){
		let errore=false
		if(_txtUser.value=="" || _txtUser.classList.contains("bordoRosso")){
			errore=true
		}
		if(_txtPwd.value=="" || _txtPwd.classList.contains("bordoRosso")){
			errore=true
		}
		if(!_img.src.endsWith("/ok.png")){
			errore=true
		}
		if(errore){
			alert("Compilare tutti i campi")
		}
		else{
			window.location.href="pagina2.html"
		}
	})
	_btnGeneraCaptcha.addEventListener("click",generaCaptcha)

	function controllaPaw(){
		let errore=false
		if(this.value.length<8){
			errore=true
		}
		if(this.value.search(/[0-9]/)==-1){
			errore=true
		}
		if(this.value.search(/[A-Z]/)==-1){
			errore=true
		}
		if(this.value.search(/[a-z]/)==-1){
			errore=true
		}
		if(errore){
			this.classList.add("bordoRosso")
		}
		else{
			this.classList.remove("bordoRosso")
		}
	}

	function controllaUser(){
		if(this.value.length<8){
			this.classList.add("bordoRosso")
		}
		else{
			this.classList.remove("bordoRosso")
		}
	}

	function generaCaptcha(){
		captcha=""
		for(let i=0;i<5;i++){
			let riga=generaNumero(0,6)
			let colonna=generaNumero(0,6)
			_divsCaptcha[i].style.backgroundPosition=-50*colonna+"px "+-50*riga + "px"
			_divsCaptcha[i].id="div-"+colonna+"-"+riga
			captcha+=matrice[riga][colonna]
		}
		console.log(captcha)
	}
}

function generaNumero(min,max){
    let rnd = Math.floor((max - min) * Math.random()) + min;
    return rnd;
}