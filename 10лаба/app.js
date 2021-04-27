// Типы данных
// let myNumber : number; Присваивание типва данных
// myNumber = 10;
// myNumber = true;
// let myNumber = 100;
// myNumber = 200;
// myNumber = 'some string';
// let myVar: any;  Любой тип
// myVar = 10;
// myVar = 'string some';
// myVar = false;
// let myVar: number | string | boolean;
// myVar =10;
// myVar = 'asc';
// myVar = true;
// let myVar: number[] = [];
// myVar.push(10);
// myVar.push(true);
// Функции
// function myFunction (p1: number, p2?:string): boolean{
//     return true;
// }
// // myFunction(10, 'as');
// myFunction(10);
// Обобщение
// function getId<T>(id: T) : T{
//     return id;
// }
// let res = getId(10);
// let res1 = getId('key');
// классы
// class Person{
//     name: string;
//     surname: string;
//     private id: number;
//     constructor(name: string; surname: string, id:number){
//         this.name = name;
//         this.surname = surname;
//         this.id = id;
//     }
// }
// let user = new Person('Ivan', "Ivanov", 1);
// user.
// Интерфейсы
// interface MyUser{
//     name: string;
//     id: number;
//     status?: boolean
// }
// let user: MyUser;
// // user = 10;
// user ={
//     name: 'Ivanov',
//     id: 1    
// }
// Перечисление
var Status;
(function (Status) {
    Status[Status["admin"] = 10] = "admin";
    Status[Status["moderator"] = 100] = "moderator";
    Status[Status["user"] = 101] = "user";
})(Status || (Status = {}));
Status.admin;
Status.moderator;
Status.user;
