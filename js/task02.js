/* eslint-disable no-console */
// eslint-disable prefer-const
// eslint-disable no-unused-vars

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
