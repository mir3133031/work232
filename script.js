//Объявите две переменные: admin и name.Запишите строку "Джон" 
//в переменную name.Скопируйте значение из переменной name в admin.Выведите в консоль admin
let name = 'джон'
let admin = name
console.log(admin);
2. // Баланс пользователя
let balance = 25000

// Траты
let car = 4480
let food = 890

// Доходы
let invoice = 5500
let stock = 4200

// Итоги
let a = car + food
let totalIncome = balance + invoice + stock
let totalWastes = balance - a
let totalBalance = totalIncome - a
console.log(`тотал с тратами `, totalWastes);
console.log(` общий тотал  `, totalBalance);
console.log(`тотал с доходами  `, totalIncome);


