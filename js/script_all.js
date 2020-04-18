/* eslint-disable no-console */
// eslint-disable prefer-const
// eslint-disable no-unused-vars

// ====---- Task 01 Start
console.log('TASK 01');

let name = 'Генератор защитного поля ';
let price = 1000;

console.log(
  'Выбран «Генератор защитного поля», цена за штуку',
  price,
  ' кредитов'
);

price = 2000;

console.log(
  'Выбран', name , 'цена за штуку',
  price,
  ' кредитов'
);

// ====---- Task 02 Start
console.log('TASK 02');

const totalNumber = 100;
const orderedNumber = 80;

console.log('Кол-во товаров на складе', totalNumber);
console.log('Кол-во товаров в закзае', orderedNumber);

console.log(
  totalNumber > orderedNumber
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно твоаров'
);

// ====---- Task 03 Start
console.log('TASK 03');

const ADMIN_PASSWORD = 'SOS-all';
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

// ====---- Task 04 Start
console.log("TASK 04");

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:
//     Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
//     В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//     Проверяет сможет ли пользователь оплатить заказ:
//         если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
//         в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 23580;
const pricePerDroid = 3000;
let droidNumber = prompt("Какое количество дроидов хотите купить?");
let serverRespond;
let totalPrice = 0;

switch (droidNumber) {
    case null:
        serverRespond = "Отменено пользователем!";
        alert(serverRespond);
      break;

    // case :
    //     serverRespond = "Введено недопустимое число!";
    //   break;
  
    default:
        totalPrice = droidNumber * pricePerDroid;
        serverRespond = 'Вы купили ${droidNumber} дроидов, на счету осталось ${credits - totalPrice} кредитов.';
        alert(totalPrice > credits ? 
            'Недостаточно средств на счету!' :
            serverRespond);
      break;
  }
  
//   console.log(passCheck);
  
  

