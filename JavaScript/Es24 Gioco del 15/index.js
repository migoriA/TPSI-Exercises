"use strick"

const DIM=4
window.onload=function (){
    let _wrapper=document.getElementById("wrapper")
    let vet=[]

    for(let i=1;i<=15;i++){
        vet.push(i)
    }
    for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            let _div=document.createElement("div")
            _div.classList.add("pedina")
            _wrapper.appendChild(_div)
            _div.id="div-"+i+"-"+j
            if(i!=3 || j!=3){
                _div.style.backgroundColor="blue"
                _div.innerHTML=generaValore()
            }
            _div.addEventListener("click", spostaPedina)
        }
    }

    function spostaPedina(){
        let aus=this.id.split("-")
        let r=parseInt(aus[1])
        let c=parseInt(aus[2])
        //SOPRA
        if(r>0) {
            let cella = document.getElementById("div-" + (r - 1) + "-" + c)
            if(cella.innerHTML==""){
                swap(this,cella)
            }
        }
        //SINISTRA
        if(c>0) {
            let cella = document.getElementById("div-" + r + "-" + (c-1))
            if(cella.innerHTML==""){
                swap(this,cella)
            }
        }
        //SOTTO
        if(r<3) {
            let cella = document.getElementById("div-" + (r +1) + "-" + c)
            if(cella.innerHTML==""){
                swap(this,cella)
            }
        }
        //DESTRA
        if(c<3) {
            let cella = document.getElementById("div-" + r + "-" + (c+1))
            if(cella.innerHTML==""){
                swap(this,cella)
            }
        }
    }

    function swap(c1, c2){
        c2.innerHTML=c1.innerHTML
        c2.style.backgroundColor="blue"
        c1.style.backgroundColor="#CCC"
        c1.innerHTML=""
        controllaVincita()
    }

    function controllaVincita(){
        let cnt=1
        let errore=false
        for(let i=0;i<DIM;i++){
            for(let j=0;j<DIM;j++){
                if(i!=3 || j!=3){
                    let cella=document.getElementById("div-"+i+"-"+j)
                    if(cnt != cella.innerHTML){
                        errore=true
                    }
                    cnt++
                }
            }
        }
        if(!errore){
            alert("Hai vinto")
        }
    }

    function generaValore(){
        let pos=generaNumero(0,vet.length)
        let valore=vet[pos]
        vet.splice(pos,1)
        return valore
    }
}
function generaNumero(a,b){
    return Math.floor((b-a)*Math.random())+a
}