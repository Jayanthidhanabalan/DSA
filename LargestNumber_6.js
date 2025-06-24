//Write a function that returns the largest number in an array

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [5, 0, 10, 8, 17, 1];

console.log(findLargest(arr));
