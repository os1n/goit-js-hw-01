// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

//     При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
//     Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
//     После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

//     bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// ====---- Task 06 Start
console.log("TASK 06");

let input = 0;
let inputN;
let total = 0;

while (input !== null) {
  input = prompt(`Введите число. Для отмены нажимет ESC.`);
  console.log(input);
  console.log(typeof input);

  inputN = Number(input);
  console.log(inputN);
  console.log(typeof inputN);
  console.log(Number.isNaN(inputN));

  //total += Number(input);

  if (!Number.isNaN(inputN)) {
    total += Number(input);
    console.log(Number(input));
    // console.log(typeof Number(input));
    // console.log(Number.isNaN(input));
  } else {
    console.log(`Введено неправильный тип данных`);
    alert(`Введено неправильный тип данных`);
    // break;
  }
}

alert(`Общая сумма чисел равна ${total}`);
console.log(total);
