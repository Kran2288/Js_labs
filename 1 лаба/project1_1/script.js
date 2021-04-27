// let n = 100;
// let days = prompt("Сколько прошло дней бро ?", "Ответ указать цифрой" );  // Задаем вопрос и получаем цифру
// let final = n - days;

// if(days<0 || days>100){
//     alert("Введено неправильное значение");
// } else if (final % 10 == 1 && final != 11){
// console.log("Остался "+ final + " день")
// } else if(final % 10 == 2 || final % 10 == 3 || final % 10 == 4) {
// console.log("Осталось "+ final + " дня")
// } else{
// console.log("Осталось "+ final + " дней")}



function daysNum() {
    let daysOff = prompt("Введите количество прошедших дней: ", "");
    let str;
    let lasf = (100 - daysOff) % 10;
    
    ret();
    function ret() {
        if (daysOff < 0 || daysOff > 100) {
            alert("Вы ввели некоректное значение");
            daysNum();
        } else if ((100 - daysOff > 10) && (100 - daysOff < 21)) {
            str = "Осталось " + (100 - daysOff) + " дней!";
        } else {
            switch (lasf) {
                case 1:
                    str = "Остался " + (100 - daysOff) + " день!";
                    break;
                case 2:
                case 3:
                case 4:
                    str = "Осталось " + (100 - daysOff) + " дня!";
                    break;
                default:
                    str = "Осталось " + (100 - daysOff) + " дней!";
                    break;
            }
        }

        alert(str);
    }
}

daysNum();