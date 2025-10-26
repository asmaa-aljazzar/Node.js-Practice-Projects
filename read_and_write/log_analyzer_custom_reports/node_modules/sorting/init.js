/**
*	This file bundles all sorting algorithms ( required by node only )
*
*	@author Lakha Singh
*/

(function(){
	var bubbleSort = require('./bubble-sort.js');

	// This is only required for node
	if ( typeof module === 'object' ){
		module.exports = {
			bubbleSort: bubbleSort
		}
	}
}());