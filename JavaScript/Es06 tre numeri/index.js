"use strict"

let vet=[]
let aus=[]
let _txtN
let _chkN
let _btnInvia

function init() {
    _txtN=document.getElementsByName("txtN")
    _chkN=document.getElementsByName("chkN")
    _btnInvia=document.getElementById("btnInvia")

    for(let i=0; i<8; i++)
        aus[i]=i+1
    for(let i=0; i<3; i++)
    {
        let posizione=generaNumero(0,aus.length)
        vet[i]=aus[posizione]
        aus.splice(posizione,1)
    }
    console.log(vet)
}

function controlla() {
    let cont=0
    let temp=[]
	
	for(let i=0; i<3; i++)
		temp[i]=vet[i]
    
    for(let i=0; i<3; i++)
    {
        let val=parseInt(_txtN[i].value)
        if(temp.includes(parseInt(_txtN[i].value)))
		{
            cont++
            let pos=temp.indexOf(val)
			temp.splice(pos,1)
		}
        _chkN[i].checked=false
    }
    for(let i=0; i<cont; i++)
    {
        _chkN[i].checked=true
    }
    if(cont == 3)
    {
        alert("HAI VINTO!")
        _btnInvia.disabled=true
        for(let i=0; i<3; i++)
        {
            _txtN[i].disabled=true
        }
    }
}

function generaNumero(a,b) {
    /* con questa formula si genera un numero random tra a e b con estremo a incluso e estremo b escluso */
    let ris=Math.floor((b-a)*Math.random())+a
    return ris
}
