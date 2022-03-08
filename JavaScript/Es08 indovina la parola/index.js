"use strict"

let _txtPunti
let _txtCar
let _chkRis
let _btnInvia
let _btnRisposta
let _txtIns

let punti=100
let vet=["Italia","Pizzeria","Calcio","Automobilismo","Juventus","Lamborghini","Lavagna","Lasagna","Lampadario","Finestra"]
let parolaSegreta


function inizializza(){
    let pos=generaNumero(0,vet.length)
    punti=100
    _txtPunti=document.getElementById("txtPunti")

    parolaSegreta=vet[pos];
    parolaSegreta=parolaSegreta.toUpperCase();
    _txtPunti.value=punti;
    _txtCar=document.getElementsByName("txtCar")
    _chkRis=document.getElementsByName("chkRis")
    _btnInvia=document.getElementById("btnInvia")
    _btnRisposta=document.getElementById("btnRisposta")
    _txtIns=document.getElementById("txtIns")



    for(let i=0;i<_txtCar.length;i++)
    {
        _txtCar[i].readOnly=true;
        _chkRis[i].disabled=true;
        _chkRis[i].checked=false;

        if(i<parolaSegreta.length)
        {
            _txtCar[i].value="*";
        }
        else
        {
            _txtCar[i].value="";
        }
    }
    _btnInvia.disabled=false
    _btnRisposta.disabled=false
    console.log(parolaSegreta)
    
}

function confronta(){
    let carattere=_txtIns.value;
    if(carattere.length==1)
    {
        carattere=carattere.toUpperCase();
        for(let i=0;i<parolaSegreta.length;i++)
        {
            if(carattere==parolaSegreta[i])
            {
                _txtCar[i].value=carattere
                _chkRis[i].checked=true
            }
        }
        punti-=5;
        _txtPunti.value=punti;
        verificaSeVintoPerso(punti)
        
        
    }
    else
    {
        alert("METTI UN FORMATO VALIDO ")
        _txtIns.value=""
    }
}

function rispondi(){
    let risposta=prompt("Inserici la tua risposta: ");
    risposta=risposta.toUpperCase();
    if(risposta==parolaSegreta)
    {
        for(let i=0;i<parolaSegreta.length;i++)
        {
            
            _txtCar[i].value=risposta[i]
            _chkRis[i].checked=true
        }
    }
    else
    {
        alert("RIPROVA")
    }
    punti-=20;
    _txtPunti.value=punti;
    verificaSeVintoPerso(punti);
}

function verificaSeVintoPerso(punti){
    if(punti<1)
        {
            alert("HAI PERSO")
            _btnInvia.disabled=true;
            _btnRisposta.disabled=true;
        }
        else
        {
            let i=0
            while(i<parolaSegreta.length && _chkRis[i].checked==true)
                i++
            if(i==parolaSegreta.length)
            {
                alert("HAI VINTO");
                _btnInvia.disabled=true;
                _btnRisposta.disabled=true;
            }
        }
}

function generaNumero(a,b){
    let ris=Math.floor(((b-a)*Math.random())+a);
    return ris
}