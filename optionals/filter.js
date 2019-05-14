function filter(array, callback) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      result.push(array[index]);
    }
  }
  return result;
}

const numbers = [1, 2, 3];
console.log(numbers);
const evens = filter(numbers, number => number % 2 === 0);
console.log(evens);
