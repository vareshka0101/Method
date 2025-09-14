/* Использование forEach:
 Задача: У вас есть массив объектов, представляющих собой список студентов с их именами и возрастом. Используйте метод forEach, чтобы вывести в консоль имена всех студентов.*/
const students = [
  { name: "Ivan", age: 20 },
  { name: "Anna", age: 19 },
  { name: "Igor", age: 22 },
];

let names = "";

students.forEach(function (student, index) {
  names += student.name;
  if (index < students.length - 1) {
    names += ", ";
  }
});

console.log(`Список студентов: ${names}`);

