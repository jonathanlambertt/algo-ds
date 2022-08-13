// given array MUST be sorted
const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) {
      return true;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(binarySearch([1, 3, 6, 8, 12, 13, 20, 34, 50], 8));
