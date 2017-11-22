'use strict';

Array.prototype._without = function(item){
	var array = this;
	var output = [];
	for(var i = 0, l = array.length; i < l; i++){
		if(array[i] != item){
			output.push(array[i]);
		}
	}
	return output;
}
