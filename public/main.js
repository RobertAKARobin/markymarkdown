'use strict';

window.addEventListener('DOMContentLoaded', function(){
	document.getElementById('input').addEventListener('keydown', function(event){
		var isTab = (event.keyCode == 9);
		if(isTab){
			event.preventDefault();
		}
	});
});
