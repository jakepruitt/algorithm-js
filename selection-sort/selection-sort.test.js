var assert = require('assert');
var selectionSort = require('./selection-sort');

describe('Selection Sort algorithm', function() {
	var numArray = [11, 7, 10, 1, 4];
	var stringArray = ["a", "ab", "b", "A", "AB", "B"];

	it('should sort a number array', function() {
		var selectSorted = selectionSort(numArray);
		var nativeSorted = numArray.sort(function(a, b) { return a - b; });

		assert.deepEqual(selectSorted, nativeSorted, 'The numberArray was not sorted properly.\n\tExpected: ' + nativeSorted + '\nBut instead got: ' + selectSorted);
	});

	it('should sort a string array', function() {
		var selectSorted = selectionSort(stringArray);
		var nativeSorted = stringArray.sort();

		assert.deepEqual(selectSorted, nativeSorted, 'The stringArray was not sorted properly.\n\tExpected: ' + nativeSorted + '\nBut instead got: ' + selectSorted);
	});
});