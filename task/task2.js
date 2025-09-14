/* Использование filter:
Задача: У вас есть массив строк. Используйте метод filter, чтобы отфильтровать строки, длина которых больше 5 символов.*/


const strings = ['cat', 'dog', 'bear', 'duck'];

const longStrings = strings.filter(str => str.length > 3);
console.log(
  `В данном массиве следующие слова имеют больше 3 символов: ${longStrings.toString()}`);
