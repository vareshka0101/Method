/* Использование reduce:
 Задача: У вас есть массив чисел. Используйте метод reduce, чтобы найти сумму всех чисел в массиве.*/
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
