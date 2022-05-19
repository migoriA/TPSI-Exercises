const DIM = 10;
let livello = 0;

window.onload= function(){
	let _wrapper = document.getElementById("wrapper");
    let div
	for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            div=document.createElement("div")
            div.id="div "+i+"-"+j
            div.classList.add("cella")
            _wrapper.appendChild(div)
        }
    }
    let timerId=setInterval(restringi,500)
	function restringi(){
        reset()
        for(let i=livello;i<DIM-livello;i++){
            let cella=document.getElementById("div "+livello+"-"+i)
            let cellaSotto=document.getElementById("div "+(DIM-livello-1)+"-"+i)
            let cellaSinistra=document.getElementById("div "+i+"-"+livello)
            let cellaDestra=document.getElementById("div "+i+"-"+(DIM-livello-1))

            cella.style.backgroundColor="red"
            cellaSotto.style.backgroundColor="red"
            cellaSinistra.style.backgroundColor="red"
            cellaDestra.style.backgroundColor="red"
        }
        livello++;
        if(livello==5){
            livello=0
        }
    }
    function reset(){
        for(let i=0;i<DIM;i++){
            for(let j=0;j<DIM;j++){
                let _div=document.getElementById("div "+i+"-"+j)
                _div.style.backgroundColor="#CCC"
            }
        }
    }
}	



function generaNumero(min, max){
    let rnd = Math.floor((max - min) * Math.random()) + min;   
    return rnd;
}