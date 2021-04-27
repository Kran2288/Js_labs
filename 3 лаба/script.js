// Функции
// function myFunction(){
// }
// let myFunction = function(){
//     console.log('!');
// }
// console.log( typeof myFunction);

// Самовызывающаяся функция
// (function (){
//     console.log('Hello');
// })();

// Параметры функции

// function sum(a, b){
//     return a+b;
// }
// let res = sum(10,20);
// console.log(res);

// function myFunction(p1 = 1, p2 = 2, p3 = 3){
//     console.log(p1);
//     console.log(p2);
//     console.log(p3);
// }
// myFunction(4,5,6);

// let arr=[1,2,3,4,7];
// function arrFunction(p){
//     if(Array.isArray(p)){
//         for(let item of p){
//             console.log(item);
//         }
//     } else { console.log('Не массив');}
   
// }

// // arrFunction(arr);
// arrFunction(true);

// // arguments
// function sum(){
    
//     let s = 0;
//     for (let item of arguments){
//         s+= item;
//     }
//     return s;
// }
//  let res = sum(1,2,3,4,5);
// console.log(res);

// Контекст вызова

// function myFun(){
//     console.log(this);
// }
// myFun();

// let obj = {
//     name: 'my object',
//     f: function(){
//         console.log(this);
//     }
// }
// obj.f();

// Функции обратного вызова
// function myFun(callback){
//     if(typeof callback === 'function'){
//         callback();
//     } else {
//         console.log('Это не функция');
//     }
     
// }
// // myFun(function(){
// //     console.log('Hello');
// // });
// // myFun(true);
// myFun(myCallback);

// function myCallback(){
//     console.log('Hello from my callback');
// }

// // Стрелочные функции
// let a = function(){
//     return 10;
// }
// // let a = () => 10;
// // console.log(a);

// let b = function(){
//     console.log('!');
//     return 10;
// }
// b();

// let _b = () => {
//     console.log('!');
//     return 10;
// }
// _b();
// let c = function (p){
//     return p*10;
// }
// c(4);
// res = c(4);
// // console.log(res);

// let _c = p => p*10
// // _c(5);
// // res = _c(6);
// console.log(_c(7));

// let d = function(p1, p2){
//     return p1 + p2;
// }
// let _d = (p1,p2) => p1 + p2;

// let obj ={
//     arr: [1,2,5,6,8],
//     positive: false,
//     f: function(){
//         this.arr.sort(function(a,b){
//             console.log(this);
//             return this.positive === true ? a -b : b -a;
//         })
//     }
// }
// obj.f();
// console.log(obj);


// // Find - поиск 1-го эллемента
// let arr = [1,3,3,4,5,6,9, 11, 22, 3333, 4444, 111];
// // let res = arr.find((item, index, array) => {
// //     return item % 2 === 0;
// // });
// // console.log(res);

// // let res = arr.filter(item => item%2 ===0);
// // console.log(res);

// arr.sort((a, b) => a -b);
// console.log(arr);


let a =[10];
let b = [20];
a = b;
b[0] = 100;
console.log(a);
