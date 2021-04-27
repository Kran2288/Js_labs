// let a = 10;
// let b = 10.5;
// let c = 10/2;
// let d = 10/0;

// console.log(a);
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);
// console.log(c);
// console.log(typeof c);
// console.log(d);
// console.log(typeof d);

// let a = "string";
// let b = `string`;
// let c = 'string';
// console.log(a);
// console.log(b);
// console.log(c);

// let count = 10;
// let str = "count = " + count;
// console.log(str);

// let strl = `count = ${count}`;
// console.log(strl);

// console.log(true && false);
// console.log(true || false);

// let a = 10;
// a /=2;
// console.log(a);

// let a = 10;
// let b = "10";
// console.log(a==b);
// console.log(a===b);

// let a = 10;
// let b = 5;
// console.log(a < b);

// let a = 11;
// if(a==10){
//     console.log("Крута, хайп")
// } else if(a<10){
//     console.log("Все равно хайп");
// } else {
//     console.log("Не круто")
// };

// let a=8;
// (a>10) ? console.log("не круто") : console.log("круто"); 

// let a = 10;
// switch(a){
//     case 10:
//         console.log(10);
//         break;
//     case 20:
//         console.log(20);
//         break;
//     default:
//         console.log("broke");
//         break;
// };

// Циклы
// let a = 10;
// while(a-- >0){
//     console.log(a);
// };

// let a = 10;
// do{
//     console.log(a);
// } while(a-->0);


// for(var j=0 ; j <= 10; j++){
//     if(j === 4){
//         continue;
//     }
//     if(j === 6){
//         break;
//     }
//     console.log(j)
// }

// alert("Hello world");

// let res = confirm(" yes i am");
// console.log(res);

// let res1 = prompt("Введите текст", "default");
// console.log(res1);






// let res = prompt("Каково кол-во прошедших дней?", "92");
// res2 = res.trim();
// res2 = Number(res2);
// res3 = 100 - res2;
// let res1 = res3%10;

// if(res3 > 0 && res3 < 100 && res3 !=null){
//     switch (res1) {
//         case 1:
//             console.log("Остался " + res3 + " день");
//             break;
//         case 2 :
//             console.log("Осталось " + res3 + " дня");
//             break;
//         case 3:
//             console.log("Осталось " + res3 + " дня");
//             break;
//         case 4:
//             console.log("Осталось " + res3 + " дня");
//             break;
//         case 5:
//             console.log("Осталось " + res3 + " дней");
//             break;
//         case 6:
//             console.log("Осталось " + res3 + " дней");
//             break;
//         case 7:
//             console.log("Осталось " + res3 + " дней");
//             break; 
//         case 8:
//             console.log("Осталось " + res3 + " дней");
//             break; 
//         case 9:
//             console.log("Осталось " + res3 + " дней");
//             break;   
//         default:
//             break;
//     }    
// } else {
//     console.log("Неправильно");
// }


// let i = 0;
// while(i>0 && i<82){
    
// }
// Массивы
// let arr = [];
// console.log(arr);

// Проверка на массив
// console.log(Array.isArray(arr));
// let a = 10;
// console.log(Array.isArray(a));

// Иницилизация массива
// let arr = [1,2,3,4,5,6];
// console.log(arr); 
// let arr1 = [1, 2.4, true, 'Строка'];
// console.log(arr1);
// let arr2 = [1, [1, 2.4, true], 'Строка'];
// console.log(arr2);

// console.log(arr2[1][2]);

// let arr = [1,2,3,4,5,6];
// arr['someKey'] = 12;
// console.log(arr['someKey']);
// let a = "asxasdaasdwsxqxx"
// // Цикл for in
// for (let i in arr){
//     // console.log(i)
//     console.log(`${i} = ${arr[i]}`);
// };

// // Цикл for of
// for (let item of arr){
//     console.log(item);
//     // console.log(`${i} = ${arr[i]}`);
// };

// for (let j=0 i < arr.length; i++){
//     console.log(`${i} = ${arr[i]}`);
// }



// Методы для работы с массивами
// let arr = [1,2,3,4,5,6];
// join - преобразование в строку
// let res = arr.join('<br>');
// console.log(res);
// console.log(arr);
// document.write(res);

// reverse - реверсирует массив
// let res = arr.reverse();
// console.log(res);
// console.log(arr);

// Сложение массивов - concat
// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [7,8,9];
// let res = arr.concat(a2 , a3);
// console.log(res);

// ... - оператор расширения
// console.log(...a1, ...a2);

// slice - получение части массива
// let arr = [1,2,3,4,5,6];
// let res = arr.slice(1, 4);
// console.log(res);

// splice - удаление элементов массива, вставка эллементов в середину массива
// let res = arr.splice(1, 2, true, 3, 4,5);
// let res = arr.splice(1, 0, true, 3, 4,5);
// console.log(res);
// console.log(arr);

// push - добавить эллементы в конец массива
// let res = arr.push(true);
// console.log(res);
// console.log(arr);

// pop - удаляет эллемент из конца массива
// let res = arr.pop();
// console.log(res);
// console.log(arr);

// unshift - добавление эллемента в начало массива
// shift - удаление эллемента из начала массива

// sort - сортировка
// let arrSort = [2,1,11,111,555,55,9,6];
// let res = arrSort.sort();
// console.log(res);
// console.log(arrSort);



// Методы работы со строками
// let str = 'Hello world!';
// console.log(str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[11]);
// let res = str.split('');
// let res = str.split(' ');
// console.log(res);


// Получение подстроки из строки
// let res = str.substr(3,4);
// console.log(res);

// substring
// [start; end)
// let res = str.substring(2, 6);
// console.log(res);


// Индекс вхождения подстроки в строку
// indexOf
// let res = str.indexOf('ll');
// console.log(res);

// lastindexOf
// let res = str.lastIndexOf('wor');
// console.log(res);




// Дата и врямя
// let now = new Date();
// console.log(now);
// console.log(Number(now));
// console.log(now.toLocaleString());
// console.log(now.toTimeString());
// console.log(now.toLocaleTimeString());

// console.log(now.getFullYear());
// console.log(now.getMonth()); //Месяца начинаются с 0
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMinutes());
// now.setSeconds(140);
// console.log(now);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// let newYers = new Date(2020, 0, 1, 11, 23, 56);
// console.log(newYers);

// let now = new Date(); //Текущее время
// let newYear = new Date(now.getFullYear() +1, 0, 1); //новый год
// // console.log(newYear);
// let d = newYear - now;
// d = d / (1000 * 60  *60 * 24);
// d = Math.floor(d);
// console.log(`До нового года осталось ${d} дней`);

// Отложеное выполнение функции
// setTimeout(callback, время в милисекундах)
//  let myTimer = setTimeout(() => {
//     console.log('hello');
// }, 1000);

// clearTimeout(myTimer); Что - бы функция не выполнялась
//  let myInterval = setInterval(() => {
//     console.log('hello');
// }, 1000);

// setTimeout(() => {
//     clearInterval(myInterval); //Что бы закончилось после 5 сек
// }, 5000);

// setInterval(() => {
//     // это время setInterval не учитывает
// }, 1000);


// для учета времени выполнения коллбека используют рекурсивный setTimeout

// let myTimeout = setTimeout( function tik(){
//     console.log('тик');
//     myTimeout = setTimeout(tik, 1000);
// }, 1000);



