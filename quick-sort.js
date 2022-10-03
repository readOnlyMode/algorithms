const arr = [6, 5, 3, 1, 8, 7, 2, 4];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const arrMin = [];
  const arrMax = [];
  const element = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (element >= arr[i]) {
      arrMin.push(arr[i]);
    }

    if (element < arr[i]) {
      arrMax.push(arr[i]);
    }
  }
  return [...quickSort(arrMin), element, ...quickSort(arrMax)];
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middle) continue;

    arr[i] > arr[middle] ? right.push(arr[i]) : left.push(arr[i]);
  }

  return [...quickSort(left), arr[middle], ...quickSort(right)];
}

function quickSort2(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    return arr;
  }
  let pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivotValue) {
      const val = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = val;
      pivotIndex++;
    }
  }

  [arr[end], arr[pivotIndex]] = [arr[pivotIndex], arr[end]];

  quickSort2(arr, 0, pivotIndex - 1);
  quickSort2(arr, pivotIndex + 1, end);
}

function quickSort3(arr, start = 0, end = arr.length - 1) {
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
    ...quickSort3(arr.slice(0, pivotIndex)),
    ...quickSort3(arr.slice(pivotIndex)),
  ];
}
// ------------------------------------------------------------------------
quickSort4(arr);
console.log(arr);
function quickSort4(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    return arr;
  }

  let pivotIndex = partition(arr, start, end);
  quickSort4(arr, 0, pivotIndex - 1);
  quickSort4(arr, pivotIndex + 1, end);
}

function partition(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
