let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quetient = a / b;
let firstName = "Анна";
let lastName = "Иванова";
let fullName = firstName + " " + lastName;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quetient);
console.log(fullName);

// ===== Урок: операторы и условия =====
let title = "";
if (title === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}
let tasks = 5;
if (tasks === 0) {
  console.log("Список пуст");
} else if (tasks <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
}
let isCompleted = false;
if (isCompleted) {
  console.log("Задача выполнена");
} else {
  console.log("Задача ещё в работе");
}
