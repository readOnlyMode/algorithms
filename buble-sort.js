const arr = [3, 2, 1, 4, 5, 6, 9, 8, 7];
function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
