/* Использование every:
 Задача: У вас есть массив чисел. Используйте метод every, чтобы проверить, все ли числа в массиве положительные.*/

const mas = [1, 2, 3, 4];

const areAllPositive = mas.every((number) => number > 0);

if (areAllPositive) {
  console.log(`В данном массиве все положительные числа`);
} else {
  console.log(`В данном массиве имеются отрицательные числа`);
}
