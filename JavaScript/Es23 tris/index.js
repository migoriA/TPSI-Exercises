"use strick"

const DIM=3
let turno="X"

window.onload=function(){
    let _table=document.getElementsByTagName("table")[0]
    for(let i=0;i<DIM;i++){
        let tr=document.createElement("tr")
        _table.appendChild(tr)
        for(let j=0;j<DIM;j++){
            let td=document.createElement("td")
            let img=document.createElement("img")
            tr.appendChild(td)
            td.appendChild(img)
            img.id="img-"+i+"-"+j
            img.status="vuoto"
            img.src="img/vuota.png"
            img.addEventListener("click",visualizza)
        }
    }
    function visualizza(){
        if(turno=="X"){
            this.src="img/croce.png"
            this.status="occupato"
            controllaVincita()
            turno="O"
        }
        else {
            this.src = "img/cerchio.png"
            this.status = "occupato"
            controllaVincita()
            turno = "X"
        }
    }
    function controllaVincita(){
        for(let i=0;i<DIM;i++){
            let img1=document.getElementById("img-"+i+"-"+0)
            let img2=document.getElementById("img-"+i+"-"+1)
            let img3=document.getElementById("img-"+i+"-"+2)

            if(img1.src==img2.src && img2.src==img3.src && img1.status!="vuoto"){
                alert("Ha vinto "+turno)
            }
        }
        for(let i=0;i<DIM;i++){
            let img1=document.getElementById("img-"+0+"-"+i)
            let img2=document.getElementById("img-"+1+"-"+i)
            let img3=document.getElementById("img-"+2+"-"+i)

            if(img1.src==img2.src && img2.src==img3.src && img1.status!="vuoto"){
                alert("Ha vinto "+turno)
            }
        }
        let img1=document.getElementById("img-"+0+"-"+0)
        let img2=document.getElementById("img-"+1+"-"+1)
        let img3=document.getElementById("img-"+2+"-"+2)
        if(img1.src==img2.src && img2.src==img3.src && img1.status!="vuoto"){
            alert("Ha vinto "+turno)
        }
    }
}
