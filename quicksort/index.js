// sum with loop
function sumLoop(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// console.log(sumLoop([1, 3, 4]));

// sum with recursion
function sumRecursion(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursion(arr.slice(1));
}

// console.log(sumRecursion([1, 3, 4]));

// find max number in list
function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(findMax([10, 1, 3, 4]));

function quicksort(arr) {
  // base case
  if (arr.length < 2) {
    return arr;
  }

  // recursive case
  const pivot = arr[0];
  // sub-array of all the elements less than the pivot
  const less = arr.slice(1).filter(function (el) {
    return el <= pivot;
  });
  // sub-array of all the elements greater than the pivot
  let greater = arr.slice(1).filter(function (el) {
    return el > pivot;
  });
  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3]));
