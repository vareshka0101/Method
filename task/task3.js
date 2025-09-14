/* Использование reduce:
 Задача: У вас есть массив чисел. Используйте метод reduce, 
 чтобы найти сумму всех чисел в массиве.*/
const numb = [1, 2, 3, 4];
const sum = numb.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(`Сумма всех чисел в массиве: ${sum}`);
