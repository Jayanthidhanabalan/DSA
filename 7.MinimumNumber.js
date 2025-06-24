//Write a function that returns the smallest number in an array

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [5, 0, 10, 8, -17, 1];

console.log(findSmallest(arr));
