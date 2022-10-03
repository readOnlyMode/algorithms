const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(searchedValue) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    let value = arr[middle];
    if (value === searchedValue) {
      return middle;
    }

    if (value > searchedValue) {
      end = middle - 1;
    }

    if (value < searchedValue) {
      start = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearch(-2));
