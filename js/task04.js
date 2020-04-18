
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
    serverRespond = 'Отменено пользователем!';
    alert(serverRespond);
    break;

  // case :
  //     serverRespond = "Введено недопустимое число!";
  //   break;

  default:
    totalPrice = droidNumber * pricePerDroid;
    const serverRespond1 = `Вы купили ${droidNumber} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
    console.log(serverRespond1);
    
    alert(
      totalPrice > credits ? 'Недостаточно средств на счету!' : serverRespond1
    );
    break;
}

console.log(credits);
console.log(droidNumber, " * ", pricePerDroid, "= ", totalPrice);
console.log(credits - totalPrice);

//   console.log(passCheck);
