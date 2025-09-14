/* Использование some:
Задача: У вас есть массив чисел. Используйте метод some, чтобы проверить, содержит ли массив хотя бы одно четное число.*/
const digit = [1, 3, 5, 7];

const hasEvenNumber = digit.some((number) => number % 2 === 0);
if (hasEvenNumber) {
  console.log("В данном массиве есть четные числа");
} else {
  console.log("В данном массиве нет четных чисел");
}
