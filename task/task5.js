/* Использование find:
 Задача: У вас есть массив объектов, представляющих собой список книг с их названиями и авторами. Используйте метод find, чтобы найти книгу по заданному названию.*/
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
];

const targetTitle = "1984";

const foundBook = books.find((book) => book.title === targetTitle);
console.log(
  `Книга по заданному запросу в массиве объектов: ${JSON.stringify(foundBook)}`
);

