// Binary search - divide and conquer

function binarySearch(list, item) {
  // starting index
  let low = 0;
  // highest index
  let high = list.length - 1;

  // iterate while the array is not narrowed to one element
  while (low <= high) {
    // check the middle index
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      // the target found
      return mid;
    } else if (guess > item) {
      // target is too high
      high = mid - 1;
    } else {
      // target is too low
      low = mid + 1;
    }
  }

  return null;
}

my_list = [1, 3, 5, 7, 9];

console.log(binarySearch(my_list, 3));
console.log(binarySearch(my_list, -1));
