//***/ Example 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const delElem = genres.shift();
// console.log(delElem);
// console.log(genres.unshift('Country', 'Reggae'));
// console.log(genres);


// *** Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = "8 11";
// const sides = values.split(' ');
// const width = parseFloat(sides[0]);
// const height = parseFloat(sides[1]);
// const area = width * height;
// const area = sides[0] * sides[1];
// console.log(`Area of the rectangle: ${area}`);


// *** Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку
// в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

// *** Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров,
// разделенные запятыми.Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const namesArray = names.split(",");
const phonesArray = phones.split(",");
for (let i = 0; i < arrNames.length; i++) {
    console.log(`name: ${namesArray[i]}, phone: ${phonesArray[i]}`);
}

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const namesArray = names.split(",");
const phonesArray = phones.split(",");

for (let i = 0; i < namesArray.length; i++) {
  console.log("Ім'я:", namesArray[i]);
  console.log("Телефон:", phonesArray[i]);
}