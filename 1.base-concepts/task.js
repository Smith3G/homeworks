'use strict'
function solveEquation(a, b, c) {
  let arr;
  let root1;
  let root2;
  let d;
  d = b ** 2 - 4 * a * c;
   if (d < 0) {
    return arr = [];
  }
   else if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / 2*a;
    root2 = (-b - Math.sqrt(d)) / 2*a;
    return arr = [root1, root2]
  }
   else if (d === 0) {
    root1 = root2 = -b / (2*a);
    return arr = [root1];
}
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalSum // Общая сумма
  let totalAmount; // Общая сумма, округленная до сотых
  let S; // Тело кредита
  let P; // Месячная процентная ставка
  let payment; // Ежемесячный платеж
  let now = new Date(); // Сегодняшняя дата

 if (isNaN(percent)) {
   return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
 } 
 if (isNaN(contribution)) {
   return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
 }
 if (isNaN(amount)) {
   return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
 }
  
  
   function monthDiff(date, now) {

    let months;
   months = (date.getFullYear() - now.getFullYear()) * 12;
   months += date.getMonth() - now.getMonth();
    return months; 
}

P = percent / (12 * 100);
S = amount - contribution;
payment = S * (P + (P / (((1 +P) ** monthDiff(date, now)) - 1)));
totalSum= payment * monthDiff(date, now);
totalAmount = totalSum.toFixed(2);
console.log(+totalAmount);

  return +totalAmount;
}