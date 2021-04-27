// Объект

// let obj ={};
// console.log(typeof(obj));
// console.log(obj);

// let person = {
//     name: 'Ayrat',
//     surname: 'Kran',
//     passport: {
//         serial:'11111',
//         number: '11111'
//     }
// }

// person.code = '0001';
// console.log(person['name']);
// console.log(person.name);

// Циклы

// let obj = {
//     p1: 1,
//     p2: 2,
//     p3: 3,
//     p4: 4
// }

// for(let i in obj){
//     console.log(`${i} = ${obj[i]}`);
// }

// Методы
// let pont = {
//     x:10,
//     y:20,
//     sum: function() {
//         return this.x + this.y;
//     }
// }
// console.log(pont.sum());

// // Старый синтаксис для создания классов

// function User(name, surname) {
//     this.name = name;
//     this.surname = surname;
// };
// let user1 = new User('Vasua', 'Ivanov');

// console.log(user1);
// console.log(typeof User);

// Новый синтаксис для создания классов

// class Person{
//     constructor(name = Person.getDefaultString(), 
//     surname = Person.getDefaultString()) {
//        this.name = name;
//        this.surname = surname;
//        this.invaited = false;
//        Person.count++;
//     }

//     toggleInvaited() {
//         this.invaited = !this.invaited;
//     }

//     static getDefaultString() {
//         return '-';
//     }

// }
// Person.count = 0;

// let user1 = new Person('Vasya', 'Ivanov');
// let user2 = new Person();
// // let user2 = new Person();
// user1.toggleInvaited();

// // console.log(user1);
// // console.log(user2);
// // console.log(Person.count);

// // console.log(user1 instanceof Person);

// // console.log(typeof Person);

// /** 
// // Наследование
// */
// class Worker extends Person {
//     constructor(name, surname, code) {
//         super(name, surname);
//         this.code = code;
//     }
//     toggleInvaited() {
//         this.invaited = !this.invaited;
//         console.log(this.invaited);
//     }
// }

// let worker1 = new Worker('Vasya', 'Ivanov', '011');
// worker1.toggleInvaited();


// console.log(worker1);

class MyPoint{
    constructor(x ,y){
        this.x = x;
        this.y = y;
    }
    getDistance(point){
        return Math.sqrt(Math.pow((this.x - point.x), 2) +
        Math.pow((this.y - point.y),2));
    }
}

class MyLine{
    constructor(point1, point2){
        this.point1 = point1;
        this.point2 = point2;
    }

    getLength(){
        return this.point1.getDistance(this.point2);
    }
}

let p1 = new MyPoint(10, 20);
let p2 = new MyPoint(20, 20);
let l1 = new MyLine(p1, p2);
console.log(l1.getLength());