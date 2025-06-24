//Search for a element and return the index, if the element is not present return -1

let elementList = [4, 2, 0, 10, 8, 30];

function searchElemnet(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

console.log(searchElemnet(elementList, 4));
console.log(searchElemnet(elementList, 10));
console.log(searchElemnet(elementList, 449));
