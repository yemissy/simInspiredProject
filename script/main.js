window.onload=popUpModal;

console.log('Hello');
// document.getElementsByClassNamE('nava');


var nava=document.getElementById('innerUl');
// var ul1=document.getElementById('ul1');
function showSubnav(){
   nava.style.display='block';
   nava.style.backgroundColor='black';
}
function hideSubNav(){
   nava.style.display='none';
 }


var images=document.getElementsByClassName('castChild');
var Temparr=[];
var count=0;
function slideimgs(){
	if(count>=2){
		for(var i=0; i<images.length; i++){
			Temparr[i]=images[i];
		}
		var shiftTemp= Temparr.shift();
		Temparr.push(shiftTemp);
		for(var i=0; i<images.length; i++){
			images[i].innerHTML=Temparr[i].innerHTML;
		}
	count=0;
	}
	else{
		count++;
	}
}

var modal=document.getElementById('Modal');
var close=document.getElementById('close');
var join=document.getElementById('Join');
var value= document.getElementById('email').value;

function popUpModal(){
	// console.log(modal);
	modal=document.getElementById('Modal');
	window.onload=modal.style.display='block';
	window.onload=modal.style.position='absolute';
}
// setTimeout(popUpModal 2000);
function closeModal(){
	close.onclick=modal.style.display='none';
}

// Search function

var searchBar=document.getElementById('searchicon');//This variable stores my searchbar
var searchInput=document.getElementById('searchicon').value;//This variable stores what the user puts in
var myDropOptions=document.getElementById('SearchUl');//This variable stores my search dropdown options before filtering
var myKeyWords=document.getElementsByClassName('keyWords');//This stores all my ANCHORS in my dropdown as an array before filtering;
var myList=document.getElementsByClassName('list3');//This stores ALL THE CONTENT OF MY LIST TAG  in my dropdown as an array before filtering;
console.log(myKeyWords.length);
console.log(myList.length);
function display(){
	// searchInput=document.getElementById('searchicon').value;//Putting This here updates to the new value we get in my search input
	if(searchInput!=""){
		myDropOptions.style.display='block';
	}
	else{
		myDropOptions.style.display='none';
	}
}

function doThis(){
	searchInput=document.getElementById('searchicon').value;//store the updated value/data
	console.log(searchInput);
	for(let i=0;i<myKeyWords.length; i++){ //iterate through the anchors that.
		//I'm iterating through the anchors because my values are links. They arent just regular list items
		console.log(myKeyWords[i].innerHTML);
		var indexOfwords= myKeyWords[i].innerHTML.toLowerCase().indexOf(searchInput.toLowerCase());
		                 //myKeyWords are the array of anchors, so basically get the index of/position of the inputed values
		                 //in my array at each index the array iteration is at i.e myKeyWords[i] and changing the chaning the value inputed to lowercase
		                 //and also value between our anchor tags;
		console.log(indexOfwords);
		if(indexOfwords > -1){//f it is in there...If IT IS SEARCHABLE
			//console.log(myKeyWords[i]);
			myList[i].style.display='block';
		}
		else{
			myList[i].style.display='none';
		}

	}
	display();
}
