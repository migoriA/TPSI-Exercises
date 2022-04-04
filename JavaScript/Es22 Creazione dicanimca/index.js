"use strick"

const DIM=10

window.onload=function(){
  let _wrapper=document.getElementById("wrapper")
  for(let i=0;i<DIM;i++){
    for(let j=0;j<DIM;j++){
      let _button=document.createElement("button")
      _button.classList.add("btnStyle")
      _button.id="btn-"+i+"-"+j
      _button.innerHTML="&nbsp"
      _wrapper.appendChild(_button)
      _button.addEventListener("click",buttonClick)
    }
  }
  function buttonClick(){
    let aus=this.id.split("-")
    let i=aus[1]
    let j=aus[2]
    
    this.innerHTML=i+"-"+j
    this.style.backgroundColor="red"
    this.disabled=true
  }
}
