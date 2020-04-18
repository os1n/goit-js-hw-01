// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.
//     Китай - 100 кредитов
//     Чили - 250 кредитов
//     Австралия - 170 кредитов
//     Индия - 80 кредитов
//     Ямайка - 120 кредитов

// ====---- Task 05 Start
console.log("TASK 05");

let countryTo = prompt("Введите страну назначения:");
console.log(countryTo);
console.log(typeof countryTo);

const country1 = "Китай";
const country2 = "Чили";
const country3 = "Австралия";
const country4 = "Индия";
const country5 = "Ямайка";

const price1 = 100;
const price2 = 250;
const price3 = 170;
const price4 = 80;
const price5 = 120;

countryTo = countryTo.toLowerCase();
countryTo = countryTo[0].toUpperCase() + countryTo.substring(1);

console.log(countryTo);

switch (countryTo) {
  case country1:
    alert(`Доставка в ${countryTo} будет стоить ${price1} кредитов`);
    break;

  case country2:
    alert(`Доставка в ${countryTo} будет стоить ${price2} кредитов`);
    break;

  case country3:
    alert(`Доставка в ${countryTo} будет стоить ${price3} кредитов`);
    break;

  case country4:
    alert(`Доставка в ${countryTo} будет стоить ${price4} кредитов`);
    break;

  case country5:
    alert(`Доставка в ${countryTo} будет стоить ${price5} кредитов`);
    break;

  default:
    alert(
      `В вашей стране (${countryTo}) доставка не доступна. Попробуйте проверить правильность написания страны.`
    );
    break;
}
