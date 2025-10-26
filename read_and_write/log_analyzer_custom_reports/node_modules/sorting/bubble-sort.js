/**
*	Bubble-Sort's implementation
*	For using in browser, it exposes window.bubbleSort function
*	For node, do require('bubble-sort')
*
*	@author Lakha Singh
*/

(function(){
	var bubbleSort = function( arr ){
		var i, j, tmp;

		for ( i = 0; i < arr.length - 1; i++ ){
			for ( j = 0; j < arr.length - 1 - i; j++ ){
				if ( arr[j] > arr[j+1] ){
					tmp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = tmp;
				}
			}
		}

		return arr;
	}

	// Supporting browser and node env
	if ( typeof window === 'object' ){
		window.sort = window.sort || {};
		window.sort.bubbleSort = bubbleSort;
	}
	else if ( typeof module === 'object' ){
		module.exports = bubbleSort;
	}
}());
