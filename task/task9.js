/* Фильтрация данных о пользователях:
Задача: У вас есть массив объектов, представляющих собой данные о пользователях. Каждый объект содержит информацию о возрасте, имени и статусе подписки (активна или нет). Используйте метод filter, чтобы получить список пользователей с активной подпиской и возрастом старше 30 лет.*/

const users = [
  { name: "Anna", age: 28, isSubscribed: true },
  { name: "Ivan", age: 35, isSubscribed: false },
  { name: "Oleg", age: 40, isSubscribed: true },
  { name: "David", age: 25, isSubscribed: true },
  { name: "Eva", age: 32, isSubscribed: false },
];

const filteredUsers = users.filter(
  (user) => user.isSubscribed && user.age > 30
);

console.log(
  `Cписок пользователей с активной подпиской и возрастом старше 30 лет: ${JSON.stringify(
    filteredUsers
  )}`
);
