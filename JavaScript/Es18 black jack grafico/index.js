"use strict";

window.onload=function(){
    let _btnG=document.getElementsByClassName("card")[0]
    let _cartaG=document.getElementsByClassName("card")[1]
    let _btnB=document.getElementsByClassName("card")[2]
    let _cartaB=document.getElementsByClassName("card")[3]
	let _puntiG = document.getElementsByTagName("span")[0]
	let _puntiB = document.getElementsByTagName("span")[1]	
    let _assoG=document.getElementsByClassName("msgAsso")[0]
    let _assoB=document.getElementsByClassName("msgAsso")[1]
    // prende tutti i fifli diretti di msgAsso
    let _chkG=_assoG.children[0]
    let _chkB=_assoB.children[0]

    _assoG.style.visibility="hidden"
    _assoB.style.visibility="hidden"
    _btnG.style.opacity="50%"
    _btnB.style.opacity="50%"

    //gestione mouseover-out
    _btnG.addEventListener("mouseover", MouseSopraBtn)
    _btnB.addEventListener("mouseover", MouseSopraBtn)
    _btnG.addEventListener("mouseout", MouseNonSuBtn)
    _btnB.addEventListener("mouseout", MouseNonSuBtn)
    function MouseSopraBtn(){
        this.style.opacity="100%"
    }

    function MouseNonSuBtn(){
        this.style.opacity="50%"
    }

    //gestione click del mazzo
    _btnG.addEventListener("click",pesca)
    _btnB.addEventListener("click",pesca)

    _chkG.addEventListener("click",incrementa)
    _chkB.addEventListener("click",incrementa)

    function pesca(){
        let numero=generaNumero(1,14)
        let tipo=String.fromCharCode(generaNumero(97,101))
        if(this==_btnG)
        {
            _cartaG.style.backgroundImage="url(img/"+tipo+numero+".gif)"
            if(numero>10)
                numero=10;
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+numero
            if(numero==1)
            {
                _chkG.style.visibility="visible"
                _assoG.style.visibility="visible"
            }
            else
            {
                _chkG.style.visibility="hidden"
                _assoG.style.visibility="hidden"
            }
            controllaSeSforato(_puntiG)
            
        }
        if(this==_btnB)
        {
            _btnG.removeEventListener("click",pesca)
            _btnG.removeEventListener("mouseover", MouseSopraBtn)
            _btnG.removeEventListener("mouseout", MouseNonSuBtn)
            _cartaB.style.backgroundImage="url(img/"+tipo+numero+".gif)"
            if(numero>10)
                numero=10;
            _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+numero
            if(numero==1)
            {
                _chkB.style.visibility="visible"
                _assoB.style.visibility="visible"
            }
            else
            {
                _chkB.style.visibility="hidden"
                _assoB.style.visibility="hidden"
            }
            if(parseInt(_puntiB.innerHTML)>16 && parseInt(_puntiB.innerHTML)<22)
            {
                rimuoviTuttiListener()
                controlla()
            }
            else
            {
                controllaSeSforato(_puntiB)
            }
        }

    }
    //gestione click dei checkbox
    

    function incrementa(){
        if(this==_chkG)
        {
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+10
            _chkG.style.visibility="hidden"
            _assoG.style.visibility="hidden"
            _chkG.checked="false"
            controllaSeSforato(_puntiG)
        }
        else
        {
            _puntiB.innerHTML=parseInt(_puntiG.innerHTML)+10
            _chkB.style.visibility="hidden"
            _assoB.style.visibility="hidden"
            _chkB.checked="false"
            controllaSeSforato(_puntiB)
        }
            
    }




    function rimuoviTuttiListener(){
        _btnG.removeEventListener("click",pesca)
        _btnB.removeEventListener("click",pesca)
        _btnG.removeEventListener("mouseover", MouseSopraBtn)
        _btnB.removeEventListener("mouseover", MouseSopraBtn)
        _btnG.removeEventListener("mouseout", MouseNonSuBtn)
        _btnB.removeEventListener("mouseout", MouseNonSuBtn)
        _chkG.removeEventListener("click",incrementa)
        _chkB.removeEventListener("click",incrementa)

    }

    function controlla(){
        if(parseInt(_puntiB.innerHTML)>parseInt(_puntiG.innerHTML))
            alert("Ha vinto il banco")
        else if(parseInt(_puntiB.innerHTML)<parseInt(_puntiG.innerHTML))
            alert("Il giocatore ha vinto")
        else
            alert("Parità ")
    }

    function controllaSeSforato(_punti){
        if(parseInt(_punti.innerHTML)>21)
        {
            if(_punti==_puntiG)
                alert("hai sforato")
            else
                alert("Il banco ha sforato, il giocatore ha vinto")
            rimuoviTuttiListener()
        }
    }
    //tutto il resto del codice nell onload
}





function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}