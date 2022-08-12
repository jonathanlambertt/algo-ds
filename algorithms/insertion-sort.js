const insertionSort = (arr) => {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort([8, 34, 12, 71, 29, 2, 120, 0]));
