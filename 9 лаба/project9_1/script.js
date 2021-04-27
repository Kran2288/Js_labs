const userInfo = new Object();

async function sendInfo() {
    getVisa();
    getTicket();
    getHotel();
    setTimeout(() => {
        console.log('Ticket info:')
        console.log(userInfo)
    }, 5500);
}



async function getVisa(email) {
    console.log('Получение визы');
    setTimeout(() => {
        console.log('Виза получена');
        userInfo.brirthday_date = document.getElementsByName("brirthday_date")[0].value;
        userInfo.name = document.getElementsByName('name')[0].value;
        userInfo.pass = document.getElementsByName('pass')[0].value;
    }, 1000);
}


async function getTicket(customer_id) {
    console.log('Покупка билета');
    setTimeout(() => {
        console.log('Билет куплен');
        userInfo.flight_date = document.getElementsByName('flight_date')[0].value;
        userInfo.current_city = document.getElementsByName('city')[0].value;
    }, 3000)
}


async function getHotel(id) {
    console.log('Бронирование отеля');
    setTimeout(() => {
        console.log('Отель забронирован');
        userInfo.hotel_date = document.getElementsByName('hotel_date')[0].value;
        userInfo.hotel_days = document.getElementsByName('hotel_days')[0].value;
    }, 5000);
}


// const myCustomers = [
//     {id:1, name:'Ivan Ivanov', email: 'sidorov@mail.ru'},
//     {id:2, name:'Ashirov ayrat', email: 'ashirov.ayrat@mail.ru'},
//     {id:3, name:'Daniel Garidos', email: 'daniel.ayrat@mail.ru'}
// ]

// const myGoods = [
//     {id:1, name:'Apple' },
//     {id:2, name:'Orange'},
//     {id:3, name:'Rise' },
//     {id:4, name:'Buchwheet' },
// ]

// const MyOrders = [
//     {id:1, customer_id: 1, good_id:1 },
//     {id:2, customer_id: 1, good_id:2 },
//     {id:3, customer_id: 3, good_id:3 },
//     {id:4, customer_id: 3, good_id:4 },
// ]

// // function getCustomerByEmail(email) {
// //     console.log('start getting customer');
// //     let customer;
// //     setTimeout(() => {
// //         console.log(`finish getting customers`);
// //         customer = myCustomers.find(item => item.email === email);
// //     },1000);
// //     return customer;
// // }

// // function getCustomerByEmail(email, callback) {
// //     console.log('start getting customer');
// //     let customer;
// //     setTimeout(() => {
// //         console.log(`finish getting customers`);
// //         customer = myCustomers.find(item => item.email === email);
// //         callback(customer.id);
// //     },1000);
// //     return customer;
// // }

// // function getOrdersByCustomerId(customer_id){
// //     console.log(`start getting orders`);
// //     let orders;
// //     setTimeout(() => {
// //         console.log(`finish getting orders`);
// //         orders = MyOrders.filter(item => item.customer_id === customer_id);
// //     },1000);
// //     return orders;
// // }

// // function getGoodById(id){
// //     console.log('start getting good');
// //     let good;
// //     setTimeout(() =>{
// //         good = myGoods.find(item => item.id === id);
// //     },1000)
// // }

// // (function () {
// //     let str = 'sidorov@mail.ru';
// //     // let customer = getCustomerByEmail(str);
// //     // console.log(customer);
// //     getCustomerByEmail(str, getOrdersByCustomerId);
// // })();

// // Promise
//         // ожидание
//         // выполнено
//             // fulfielled - успешно
//             // rejected - ошибка

// function getCustomerByEmail(email){
//     return new Promise((resolve, reject) => {
//         console.log('start getting customer');
//         setTimeout(() => {
//             console.log('finish getting customer');
//             let success = true;
//             if(success){
//                 let customer = myCustomers.find(item => item.email === email);
//                 resolve(customer);
//             } else {
//                 reject('error while')
//             }
//         }, 1000);
//     });
// }

// function getOrdersByCustomerId(customer_id){
//     return new Promise((resolve, reject) => {
//         console.log('start getting orders');
//         setTimeout(() => {
//             let success = true; 
//             if(success){
//                 let orders = MyOrders.filter(item => item.customer_id === customer_id);
//                 resolve(orders);
//             } else {
//                 reject('error while getting orders');
//             }
//         }, 1000);
//     })
// }

// function getGoodsById(id){
//     return new Promise((resolve, reject) => {
//         console.log("start getting good");
//         setTimeout(() => {
//             console.log('finish getting good');
//             let success = true;
//             if(success){
//                 let good = myGoods.find(item => item.id === id);
//                 resolve(good);
//             } else {
//                 reject('error while getting good');
//             }
//         },1000);
//     })
// }
// ( async function() {
//     let str = 'sidorov@mail.ru';
//     let customer = getCustomerByEmail(str);
//     console.log(customer);

//     getCustomerByEmail(str)
//         .then(customer => getOrdersByCustomerId(customer.id))
//         .then(orders => Promise.all(orders.map(order => getGoodsById(order.good_id))))
//         .then(goods => console.log(goods))
//         .catch(err => console.error(err));

//     async / await
//     try{
//     let customer =  await getCustomerByEmail(str);
//     let orders = getOrdersByCustomerId(customer.id);
//     let goods = Promise.all(orders.map(order => get))
//     console.log( await orders);
//     } catch(err) {
//         console.error(err);
//     }
// })();

