"use strict"

let _txtDisplay
let _btnNum
let _btnOperatore
let _btnClear
let _btnUguale

let n=0
let operatore=""

let cancella=false

window.onload=function(){
    _txtDisplay=document.getElementById("txtDisplay")
    _btnNum=document.getElementsByName("btnNum")
    _btnOperatore=document.getElementsByName("btnOperatore")
    _btnClear=document.getElementById("btnClear")
    _btnUguale=document.getElementById("btnUguale")
    
    for(let i=0;i<_btnNum.length;i++){
        _btnNum[i].addEventListener("click",visualizza)
    }
    for(let i=0;i<_btnOperatore.length;i++){
        _btnOperatore[i].addEventListener("click",esegui)  
    }
    _btnUguale.addEventListener("click",calcola)
    _btnClear.addEventListener("click",pulisci)
}
function visualizza(){
    let num=this.value
    _txtDisplay.value+=num
    if(cancella){
        _txtDisplay.value="0"
        cancella=false
    }
}
function esegui(){
    if(_txtDisplay==""){
        _txtDisplay.value=0
    }
    operatore=this.value
    n=_txtDisplay.value
    cancella=true
}
function calcola(){
    switch(operatore){
        case '+':
            _txtDisplay.value=(n+(parseFloat(_txtDisplay.value)))
            break
        case '-':
            _txtDisplay.value=(n-parseFloat(_txtDisplay.value))
            break
        case '/':
            _txtDisplay.value=(n/parseFloat(_txtDisplay.value))
            break
        case '*':
            _txtDisplay.value=(n*parseFloat(_txtDisplay.value))
            break
    }
}
function pulisci(){
    _txtDisplay.value=0
    n=0
    console.log(n)
    console.log(_txtDisplay.value)
}