// События

// window.onload = function () {
//     // let elm = document.getElementById('mydiv');
//     // console.log(elm);
//     // Событие мыши

//     // onclick
//     // elm.onclick = function (e) {
//     //     console.log(e);
//     // }

//     // mouseonmove
//     // elm.onmousemove = function (e){
//     //     console.log(e);
//     // }

//     // onmousedown
//     // onmousup

//     // elm.onmousedown = function (e){
//     //     console.log(e);
//     // }
//     // elm.onmouseup = function (e){
//     //     console.log(e);
//     // }
//     // elm.oncontextmenu = function (e){
//     //     console.log(e);
//     //     e.preventDefault();
//     //     // return false;
//     // }
//     // onmousewheel
//     // elm.onmousewheel = function (e){
//     //     console.log(e);
//     // }

//     // Перехват и всплытие
//     let elm = document.getElementById('mydiv');
//     let wrapelm = document.getElementById('wrapmydiv');
//     let wrapwrapelm = document.getElementById('wrapwrapmydiv');
//     elm.onclick = function (e){
//         console.log('mydiv');
        
//     }
//     wrapelm.onclick = function (e){
//         console.log('wrapmydiv');
//         e.stopPropagation();
//     }
//     wrapwrapelm.onclick = function (e){
//         console.log('wrapwrapmydiv');
//     }

// }

// События клавиатуры
// window.onkeypress = function (e){
//     console.log(e);
// }
// window.onkeydown = function (e){
//     console.log(e);
// }


// // Способы задать обработчики событий
// window.onload = function () {
//     let elm = document.getElementById('mydiv');
//     //  elm.onclick = function (e) {
//     //     console.log(e);
//     // }

//     elm.addEventListener('click', function (e) {
//         console.log('первый');
//     })
//     elm.addEventListener('click', function (e) {
//         console.log('2-jq первый');
//     })
// }

// Упражнение
// const items = [
//     {key: 1, caption: "элемент 1"},
//     {key: 2, caption: "элемент 2"},
//     {key: 3, caption: "элемент 3"},
//     {key: 4, caption: "элемент 4"},
//     {key: 5, caption: "элемент 5"},
//     {key: 6, caption: "элемент 6"},
//     {key: 7, caption: "элемент 7"},
//     {key: 8, caption: "элемент 8"}
// ]

// let message;
// let field;
// let b = 0;


// window.onload = function () {
//     message = document.getElementById('message');
//     field = document.getElementById('field');
//     initContent();
// }

// function initContent() {
//     for (let item of items){
//         let newElm = document.createElement('div');
//         newElm.setAttribute('class', 'item');
//         newElm.setAttribute('id', `item${item.key}`);
//         newElm.innerHTML = `${item.key}`;
//         newElm.addEventListener('click', setMessage.bind(null, item));
//         field.append(newElm);
//     }
// }
// function setMessage(item){
//     console.log(item);
//     b = b + item.key;
//     message.innerHTML = `<p>${b}</p>`;
// } 


window.onload = function Nani() {
    let elm1 = document.getElementById('number');
    let elm2 = document.getElementById('button1');
    let elm3 = document.getElementById('button2');
    let elm4 = document.getElementById('zac');
    let b = 0;
    let lasf = b % 10;
    let str;
    
    elm2.onclick = function () {
        b = --b;
        elm1.innerHTML = b;
    }
    elm3.onclick = function () {
        b = ++b;
        elm1.innerHTML = b;
    }
    elm4.onclick = function  daysNum () {
        ret();
        function ret() {
            if ((b < 0) || (b > 100)) {
                alert("Вы ввели некоректное кол-во стульев");
                
            } else  {
                switch (lasf) {
                    case 1:
                        str = "Вы заказали " + b + " стул";
                        break;
                    case 2:
                    case 3:
                    case 4:
                        str = "Вы заказали " + b + " стула";
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        str = "Вы заказали " + b + " стульев";
                        break;
                }
                alert(str);
            }
            
        }

        
    
    }
}


