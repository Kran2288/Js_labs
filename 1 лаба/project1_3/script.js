// function name() {
//     let userName = prompt("Введите своё имя: ");
//     if (userName == null){
//         name();
//     }else {
//          userName = userName.trim();
//     }
    
//     function conf() {
//         let inquiry = confirm("Вы подтверждаете правильность ввода?");
//         if (inquiry == true) {
//             alert("Привет " + userName);
//         } else {
//             name();
//         }
//     }
//     if (userName != '' ) {
//         conf();
//     } else {
//         name();
//     }
// }

// name();

function name() {
    let userName = prompt("Введите своё имя: "); 
    function conf() {
        let inquiry = confirm("Вы подтверждаете правильность ввода?");
        if (inquiry == true) {
            alert("Привет " + userName);
        } else {
            name();
        }
    }
    if (userName.trim() != '' ) {
        conf();
    } else {
        name();
    }
}

name();










// while (true) {
//     let name = prompt("Введите своё имя: ");
//     let name1 = name.trim();
//     if (!name1) {
//         continue;
//     } else {
//         let conf = confirm("Вы подтверждаете правильность ввода?");
//         if (conf) {
//             alert("Привет " + name1 + "!");
//             break;
//         } 
//     }
// }