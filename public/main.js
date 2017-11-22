'use strict';

window.addEventListener('DOMContentLoaded', function(){

	var input = document.getElementById('input');
	var output = document.getElementById('output');

	var keysDown = [];
	var keyDownCombos = {
		'17 83': function save(){
			var outputDoc = output.contentWindow.document;
			outputDoc.open();
			outputDoc.write(input.value);
			outputDoc.close();
		}
	}
	input.addEventListener('keyup', function(event){
		keysDown = keysDown._without(event.keyCode);
	});
	input.addEventListener('keydown', function(event){
		keysDown.push(event.keyCode);

		var inputElement = this;
		var keysDownString = keysDown.join(' ');
		var comboFunction = keyDownCombos[keysDownString];
		if(comboFunction){
			event.preventDefault();
			comboFunction();
		}
	});
});
