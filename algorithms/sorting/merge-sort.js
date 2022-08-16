const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
};

// merge together 2 sorted arrays
const merge = (arr1, arr2) => {
  let mergedArr = [];
  let tracker1 = 0;
  let tracker2 = 0;

  while (tracker1 < arr1.length && tracker2 < arr2.length) {
    if (arr1[tracker1] < arr2[tracker2]) {
      mergedArr.push(arr1[tracker1]);
      tracker1++;
    } else {
      mergedArr.push(arr2[tracker2]);
      tracker2++;
    }
  }

  // can replace with while loops
  if (tracker1 != arr1.length) {
    for (let i = tracker1; i < arr1.length; i++) {
      mergedArr.push(arr1[i]);
    }
  }
  if (tracker2 != arr2.length) {
    for (let j = tracker2; j < arr2.length; j++) {
      mergedArr.push(arr2[j]);
    }
  }

  return mergedArr;
};
