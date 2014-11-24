module.exports = function selectionSort(array) {
	// Clone the array so that we don't change the original one
	var sortedArray = array.slice(0);
	// Walk through the list from the second item to the end
	for ( var j = 1; j < sortedArray.length; j++ ) {
		// Each time you get to an item, store it's value in "temp"
		var temp = sortedArray[j];
		// Start i one to the left of j
		var i = j - 1;

		// Walk through the list to the left from j until one 
		// of two things happen:
		//   1. We find an item that is less than temp, in
		//			which case we stop because we found where temp
		//			belongs
		//	 2. We reach the bottom of the list in which case
		//			temp is the smallest element
		// Otherwise, we keep shifting the items to the right,
		// making room for where temp eventually will belong.
		while ( i > -1 && sortedArray[i] > temp ) {
			// Shift the value one space to the right
			sortedArray[i+1] = sortedArray[i];
			// Move left and perform the check again
			i--;
		}

		// After going through that loop, we're left at a point
		// where the place temp belongs is one space to the right
		// of i. We put temp there and do the whole thing over for
		// the next item in the list
		sortedArray[i+1] = temp;
	};
	// Return the sortedArray.
	return sortedArray;
};