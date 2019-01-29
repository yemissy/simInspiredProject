var userInput=document.getElementById('searchicon').value;
var possibleValues=['a','b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var inputToArr=userInput.split('');


function returnWord(){
	for(i=0; i<possibleValues.length; i++){
		for(i=0; i<inputToArr.length; i++){
			if(inputToArr.indexOf(inputToArr[i])==possibleValues.indexOf(possibleValues[i])){
				if(inputToArr[i]==possibleValues[i]){
					var commonValue=inputToArr[i];
                    console.log('you searched why')
				}
			}
		}
	}
}
returnWord();