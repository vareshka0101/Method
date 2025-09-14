/* Обработка данных о задачах:
Задача: У вас есть массив объектов, представляющих собой список задач. Каждый объект содержит информацию о названии задачи, её статусе (выполнена или нет) и приоритете (высокий, средний, низкий). Используйте метод forEach, чтобы вывести в консоль все задачи с высоким приоритетом, которые еще не выполнены.*/

const tasks = [
  { task: "Write report", status: "completed", priority: "high" },
  { task: "Send email", status: "pending", priority: "low" },
  { task: "Review code", status: "pending", priority: "high" },
  { task: "Attend meeting", status: "completed", priority: "medium" },
  { task: "Fix bugs", status: "pending", priority: "high" },
];


const highPriorityPendingTasks = [];

tasks.forEach((task) => {
  if (task.priority === "high" && task.status === "pending") {
    highPriorityPendingTasks.push(task.task);
  }
});


if (highPriorityPendingTasks.length > 0) {
  console.log(
    `Задачи с высоким приоритетом, которые еще не выполнены: ${highPriorityPendingTasks.join(
      ", "
    )}`
  );
} else {
  console.log("Нет задач с высоким приоритетом, которые еще не выполнены.");
}
