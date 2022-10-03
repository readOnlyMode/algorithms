const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function chooseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const smallesIndex = findSmallestIndex(arr, i);
    [arr[i], arr[smallesIndex]] = [arr[smallesIndex], arr[i]];
  }
  return arr;
}

function findSmallestIndex(arr, j) {
  let index = j;
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[index] > arr[i]) {
      index = i;
    }
  }
  return index;
}

console.log(chooseSort(arr));

function chooseSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }

    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

console.log(chooseSort2(arr));
