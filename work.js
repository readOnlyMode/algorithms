const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8];
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
  return -1;
}

const arr = [5, 3, 4, 2, 1, 7, 6, 9, 8];

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        swapped = true;
      }
    }
  }
  return arr;
}

function chooseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = findIndex(arr, i);
    const value = arr[i];
    arr[i] = arr[index];
    arr[index] = value;
  }
  return arr;
}
function findIndex(arr, start) {
  let index = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }

  return index;
}

function chooseSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const index = findInsIndex(arr, i);
    shiftElements(arr, index, i);
  }
  return arr;
}

function findInsIndex(arr, i) {
  for (let j = i - 1; j >= 0; j--) {
    if (arr[i] > arr[j]) {
      return j + 1;
    }
  }
  return 0;
}

function shiftElements(arr, index, i) {
  const value = arr[i];

  for (let j = i; j > index; j--) {
    arr[j] = arr[j - 1];
  }

  arr[index] = value;
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[pivot] > arr[i]) {
      left.push(arr[i]);
    }

    if (arr[pivot] < arr[i]) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

const arr2 = [12, 0, 2, 6, 1, 5, 4, 7, 9, 8];
function quickSort31(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    return arr;
  }
  const pivotValue = arr[end];
  let pivotIndex = start;
  let i = start;
  while (i < end) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
    i++;
  }

  [arr[end], arr[pivotIndex]] = [arr[pivotIndex], arr[end]];

  quickSort31(arr, start, pivotIndex - 1);
  quickSort31(arr, pivotIndex + 1, end);
}

quickSort31(arr2);
console.log(arr2);
