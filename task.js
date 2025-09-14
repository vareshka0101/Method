/* 1. Использование map:
 Задача: У вас есть массив чисел. Используйте метод map, чтобы создать новый массив, в котором каждое число умножено на 2.*/

const numbers = [1, 2, 3, 4];

const divisNumbers = numbers.map((number) => number * 2);
console.log(`Новый массив чисел: [${divisNumbers}]`);

/*2. Использование filter:
Задача: У вас есть массив строк. Используйте метод filter, чтобы отфильтровать строки, длина которых больше 5 символов.*/


const strings = ['cat', 'dog', 'bear', 'duck'];

const longStrings = strings.filter(str => str.length > 3);
console.log(
  `В данном массиве следующие слова имеют больше 3 символов: ${longStrings.toString()}`);
