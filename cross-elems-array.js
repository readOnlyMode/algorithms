const a = [1, 2, 4, 7, 11, 19];
const b = [2, 7, 19, 28, 31];
console.log(findEqualElements(a, b));

function findEqualElements(arr1, arr2) {
  const result = [];

  for (let i = 0, j = 0; i < arr1.length && j < arr2.length; ) {
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      result.push(arr1[i]);
      j++;
      i++;
    }
  }
  return result;
}

function findEqualElements1(arr1, arr2) {
  const crossArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const index = binarySearch(arr2, arr1[i]);
    if (index !== -1) {
      crossArr.push(...arr2.splice(index, 1));
    }
  }
  return crossArr;
}

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let middle = Math.floor((end + start) / 2);

    if (arr[middle] === value) {
      return middle;
    }

    if (arr[middle] > value) {
      end = middle;
    }

    if (arr[middle] < value) {
      start = middle + 1;
    }
  }
  return -1;
}
