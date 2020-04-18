/* eslint-disable no-console */
// eslint-disable prefer-const
// eslint-disable no-unused-vars

// ====---- Task 03 Start
console.log('TASK 03');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = 'all right';
let passCheck = prompt("Enter password:");

switch (passCheck) {
  case null:
    message = "Отменено пользователем!";
    break;

  case ADMIN_PASSWORD:
    message = "Добро пожаловать!";
    break;

  default:
    message = "Доступ запрещен, неверный пароль!";
    break;
}

console.log(passCheck);

alert(message);
