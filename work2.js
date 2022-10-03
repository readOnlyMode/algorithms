function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === value) {
      return middle;
    }

    if (arr[middle] > value) {
      end = middle - 1;
    }

    if (arr[middle] < value) {
      start = middle + 1;
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }

  return arr;
}

function chooseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = findMinIndex(arr, i);

    swap(arr, i, index);
  }
  return arr;
}
function findMinIndex(arr, start) {
  let index = start;
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[index] > arr[i]) {
      index = i;
    }
  }
  return index;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const index = findIndex(arr, i);
    shiftElements(arr, index, i);
  }
  return arr;
}

function findIndex(arr, start) {
  const v = arr[start];

  for (let i = start - 1; i >= 0; i--) {
    if (v > arr[i]) {
      return i + 1;
    }
  }
  return 0;
}

function shiftElements(arr, index, i) {
  const v = arr[i];
  for (let j = i; j > index; j--) {
    arr[j] = arr[j - 1];
  }
  arr[index] = v;
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const arrLeft = [];
  const arrRight = [];
  const middle = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[middle]) {
      arrLeft.push(arr[i]);
    }

    if (arr[i] > arr[middle]) {
      arrRight.push(arr[i]);
    }
  }

  return [...quickSort(arrLeft), arr[middle], ...quickSort(arrRight)];
}

function quickSort2(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    return arr;
  }

  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (pivotValue > arr[i]) {
      const tmp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = tmp;

      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

  return [
    ...quickSort2(arr.slice(0, pivotIndex)),
    ...quickSort2(arr.slice(pivotIndex)),
  ];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const sorted = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      sorted.push(arr2[j]);
      j++;
    }

    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    }
  }
  return [...sorted, ...arr1.slice(i), ...arr2.slice(j)];
}
// bubble, insertion, choose,quick, merge

function mergeSort2(arr, start = 0, end = arr.length - 1, buffer) {
  if (start >= end) {
    return arr;
  }

  if (!buffer) {
    buffer = [...arr];
  }

  const middle = Math.floor((start + end) / 2);

  mergeSort2(arr, start, middle, buffer);
  mergeSort2(arr, middle, end, buffer);
  merge2(arr, buffer, start, middle, end);

  return arr;
}

function merge2(arr, buffer, start, middle, end) {
  let l = start;
  let r = middle + 1;
  let i = start;


}
