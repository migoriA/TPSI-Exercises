"use strick"

window.onload=function(){
    let _min=document.getElementById("minuti")
    let _sec=document.getElementById("secondi")
    let _opzione4=document.getElementsByTagName("option")[0]
    let _opzione5=document.getElementsByTagName("option")[1]
    let _opzione6=document.getElementsByTagName("option")[2]
    let _opzione=document.getElementsByTagName("select")[0]
    let _wrapper=document.getElementById("wrapper")
    let dim=0

    _opzione5.disabled=true
    _opzione.addEventListener("change",function(){
        if(_opzione.value==4){
            let indici=[]
            let k=0
            _wrapper.innerHTML=""
            _wrapper.style.width="250px"
            dim=(_opzione.value*_opzione.value)/2
            for(let i=1;i<=dim*2;i++){
                if(i>(dim*2)/2){
                    num.push(i-(dim*2/2))
                }
                else{
                    num.push(i)
                }
            }

            let vet = [];
            vet.length = _opzione.value * _opzione.value;
            let cnt = 1;
            vet[0] = cnt;
            for(let i = 1; i<vet.length; i++)
            {
                if(i%2 == 0)
                    cnt++;
                
                vet[i] = cnt;
            }
            console.log(vet);

            for(let i=0;i<dim/2;i++){
                for(let j=0;j<dim/2;j++){
                    let button=document.createElement("button")
                    button.id="div-"+i+"-"+j
                    indici[k]=i+"-"+j
                    button.classList.add("cella")
                    _wrapper.appendChild(button)
                    button.innerHTML="&nbsp;"
                    k++
                }
            }
            console.log(indici.length)
            for(let i=0;i<dim/2;i++){
                let pos=generaPosizione(0,4)
                let pos2=generaPosizione(0,4)
                let _button=document.getElementById("div-"+pos+"-"+pos2)
                _button.innerHTML=num[i]
            }
            
            console.log(num)
            console.log(indici)
            
        }
        else if(_opzione.value==6){
            _wrapper.innerHTML=""
            _wrapper.style.width="320px"
            dim=(_opzione.value*_opzione.value)/2
            let num=[]
            let indici=[]
            let k=0
            let pos=generaPosizione(0,indici.length)
            let pos2=generaPosizione(0,indici.length)
            for(let i=1;i<=dim*2;i++){
                if(i>(dim*2)/2){
                    num.push(i-(dim*2/2))
                }
                else{
                    num.push(i)
                }
            }
            for(let i=0;i<dim/3;i++){
                for(let j=0;j<dim/3;j++){
                    let btn=document.createElement("button")
                    btn.id="div- "+i+"-"+j
                    indici[k]=i+"-"+j
                    btn.classList.add("cella6")
                    _wrapper.appendChild(btn)
                    k++
                }
            }
            
            console.log(num)
            console.log(indici)
        }
        
    })
}
function generaPosizione(a,b){
    return Math.floor((b-a)*Math.random())+a
}