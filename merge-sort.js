function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor((start + end) / 2);

  return merge(
    mergeSort(arr.slice(start, middle), start, middle),
    mergeSort(arr.slice(middle), start, end)
  );
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const sorted = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      sorted.push(arr2[j]);
      j++;
    }
  }
  return [...sorted, ...arr1.slice(i), ...arr2.slice(j)];
}

function mergeSort2(arr, start = 0, end = arr.length - 1, buffer) {
  if (end <= start) {
    return arr;
  }
  if (!buffer) {
    buffer = [...arr];
  }
  const mid = Math.floor((start + end) / 2);

  mergeSort2(arr, start, mid, buffer);
  mergeSort2(arr, mid + 1, end, buffer);
  merge2(arr, buffer, start, mid, end);

  return arr;
}

function merge2(arr, buffer, start, mid, end) {
  for (let i = start; i <= end; i++) {
    buffer[i] = arr[i];
  }

  let left = start;
  let right = mid + 1;
  let i = start;

  while (left < mid + 1 && right < end + 1) {
    if (buffer[left] <= buffer[right]) {
      arr[i] = buffer[left];
      left++;
    } else {
      arr[i] = buffer[right];
      right++;
    }
    i++;
  }

  while (left < mid + 1) {
    arr[i] = buffer[l];
    left++;
    i++;
  }

  while (right < end + 1) {
    arr[i] = buffer[right];
    right++;
    i++;
  }
}

