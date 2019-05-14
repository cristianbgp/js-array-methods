function push(array, ...values) {
  for (let value of values) {
    array[array.length] = value;
  }
  return array.length;
}

const numbers = [1, 2, 3];
console.log(numbers);
const total = push(numbers, 4, 5);
console.log(numbers);
console.log(total);
