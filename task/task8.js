/* Анализ данных о продажах:
 Задача: У вас есть массив объектов, представляющих собой данные о продажах за месяц. Каждый объект содержит 1
информацию о дате продажи, названии товара и сумме продажи. Используйте методы map и reduce, чтобы рассчитать общую сумму продаж для каждого товара.*/

const salesData = [
  { date: "2023-10-01", item: "apple", amount: 100 },
  { date: "2023-10-02", item: "banana", amount: 150 },
  { date: "2023-10-03", item: "apple", amount: 120 },
  { date: "2023-10-04", item: "orange", amount: 80 },
  { date: "2023-10-05", item: "banana", amount: 200 },
  { date: "2023-10-06", item: "orange", amount: 90 },
];


const salesByItem = salesData.reduce((acc, sale) => {
  const { item, amount } = sale;
  acc[item] = (acc[item] || 0) + amount; 
  return acc;
}, {});

console.log(`Проданные товары: ${JSON.stringify(salesByItem)}`);


