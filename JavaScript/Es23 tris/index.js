"use strick"

const DIM=3
let turno=0

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
            img.src="img/vuota.png"
            img.addEventListener("click",visualizza)
        }
    }
    function visualizza(){
        if(turno==1){
            this.src="img/croce.png"
            turno=2
        }
        else{
            this.src="img/cerchio.png"
            turno=1
        }
    }
}
