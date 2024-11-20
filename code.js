function binarySearch(list, element) {
    //checks if the given list is empty. if it is we return -1
    if (list.length === 0){
        return -1;
    }

    //set the left and right boundaries
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        //find the mid index of the given list
        let middle = left + Math.floor((right - left) / 2);

        // If the middle element matches the target element:
        if (list[middle] === element) {
            // Check if there are duplicates of the target element to the left.
            while (middle > 0 && list[middle - 1] === element) {
                middle--;
            }
            return middle; // Return the index of the first occurrence.
        } else if (list[middle] < element) { //sets the boundaries to the second half of the list
            left = middle + 1;
        } else { //sets the boundaries to the first half of the list.
            right = middle - 1;
        }
    }

    return result;
}
