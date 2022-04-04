
function generaNumero(a, b){
	return Math.floor((b-a+1)*Math.random()) + a;
}

function isDigit(s){
		let trovato=false
		let i=0
		while(i<s.length && !trovato){
			if(!(s[i]>="0" &&  s[i]<="9")){
				trovato=true
			}
			i++
		}
	return trovato;   
}

function isLetter(s){
    for(i=0; i<s.length; i++){
	   if(!(s[i]>="a" &&  s[i]<="z" || s[i]>="A" &&  s[i]<="Z" ))
		   return false
    }
	return true;      
}

