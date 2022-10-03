const arr = [6, 5, 3, 1, 8, 7, 2, 4];
insertionSort(arr);
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const index = findIndex(arr, i);
    shiftElements(arr, index, i);
  }
}

function findIndex(arr, start) {
  let index = 0;

  for (let i = start - 1; i >= 0; i--) {
    if (arr[start] > arr[i]) {
      index = i + 1;
      return index;
    }
  }
  return index;
}

function shiftElements(arr, index, start) {
  const value = arr[start];
  for (let i = start; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
}
console.log(arr);


function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const insertionIndex = findIndex(arr, i);

    shiftElements(arr, insertionIndex, i);
  }
  return arr;
}

function findIndex(arr, i) {
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


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        index = j + 1;
        break;
      }
    }

    const v = arr[i];
    for (let k = i; k > index; k--) {
      arr[k] = arr[k - 1];
    }
    arr[index] = v;
  }
  return arr;
}
