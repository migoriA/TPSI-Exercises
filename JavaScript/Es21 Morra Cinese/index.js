"use strick"

window.onload=function(){
  let _imgUtente=document.getElementById("imgUtente")
  let _imgComputer=document.getElementById("imgComputer")
  let _imgSmall=document.getElementsByClassName("small")
  let _btnGioca=document.getElementById("btnGioca")
  let _txtRisultato=document.getElementById("txtRisultato")

  let vet=["sasso","mano","forbice"]
  _imgComputer.style.backgroundImage="url(img/vuota.png)"
  _imgUtente.style.backgroundImage="url(img/vuota.png)"
  for(let i=0;i<vet.length;i++){
    _imgSmall[i].style.backgroundImage="url(img/"+vet[i]+".png)"
    _imgSmall[i].addEventListener("click",function(){
      let image=this.style.backgroundImage
      _imgUtente.style.backgroundImage=image
    })
  }
  _btnGioca.addEventListener("click",function(){
    let imgPc
    do{
      let n=generaNumero(0,vet.length)
      imgPc=`url("img/${vet[n]}.png")`
    }while(imgPc==_imgUtente.style.backgroundImage)
    _imgComputer.style.backgroundImage=imgPc
    
    if(_imgUtente.style.backgroundImage.includes("mano")){
      if(_imgComputer.style.backgroundImage.includes("forbice")){
        _txtRisultato.innerHTML="Vince computer" 
      }
      else{
        _txtRisultato.innerHTML="Vince giocatore"
      }
    }
  })
}

function generaNumero(a,b){
  return Math.floor((b-a)*Math.random())+a
}