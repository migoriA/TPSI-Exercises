"use strict";

const RIGHE=6;
const COLONNE=7;
const GREY = "rgb(127, 127, 127)";


window.onload=function(){
    let _wrapper=document.getElementById("wrapper")
    let _giocatore=document.getElementById("nextPlayer")

    _giocatore.classList.add("pedina")
    _giocatore.style.backgroundColor=GREY
    for(let i=0;i<RIGHE;i++){
        for(let j=0;j<COLONNE;j++){
            let div=document.createElement("div")
            _wrapper.appendChild(div)
            div.classList.add("pedina")
            div.id="div-"+i+"-"+j
            if(i==RIGHE-1){
                div.addEventListener("click",visualizza)
            }

        }
    }
    function visualizza(){

    }
}