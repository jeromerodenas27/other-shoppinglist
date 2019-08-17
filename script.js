var input = document.getElementById('input');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

function inputLength(){
	return input.value.length;
}

function createListElement(){

	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

}

button.addEventListener("click", function(){
	if(input.value.length > 0) {
	createListElement();
	}
})


input.addEventListener("keypress", function(event){
	console.log(event);
	if(input.value.length > 0 && event.which === 13) {
	createListElement();
	}
})

var li = document.querySelector('li');

li.addEventListener('click',function())

li.classlist.toggle('done');


