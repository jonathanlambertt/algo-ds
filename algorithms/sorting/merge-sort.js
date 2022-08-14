// merge together 2 sorted arrays
const merge = (arr1, arr2) => {
  let mergedArr = [];
  let tracker1 = 0;
  let tracker2 = 0;

  while (tracker1 < arr1.length && tracker2 < arr2.length) {
    if (arr1[tracker1] < arr2[tracker2]) {
      mergedArr.push(arr1[tracker1]);
      tracker1 += 1;
    } else {
      mergedArr.push(arr2[tracker2]);
      tracker2 += 1;
    }
  }

  if (tracker1 != arr1.length) {
    console.log("loop arr 1");
  }
  if (tracker2 != arr2.length) {
    console.log("loop arr 2");
  }

  return mergedArr;
};

console.log(merge([9, 34, 78], [1, 11, 50, 60]));
