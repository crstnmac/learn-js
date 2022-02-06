const arr1 = [1, 2, 5, 7, 4, 0, 6];
const arr2 = [2, 5, 6];

const checkArraySubset = (arr1, arr2) => {
  const arrValues = new Map();
  arr1.map((value, index) => (arrValues[value] = index));

  let result = true;
  for (let i = 1; i < arr2.length; i++) {
    if (arrValues[arr2[i - 1]] > arrValues[arr2[i]]) {
      result = false;
    }
  }
  return result;
};

console.log(checkArraySubset(arr1, arr2));
