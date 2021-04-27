 function Inq(){
    let str = prompt('Введите строку с разделителем ;');
    if (str != "" && str != null && str.indexOf(';') > -1){
    let arr = str.split(';');

    console.log(arr);
    for (let i of arr){
            if (i != ""){
                document.write(i, '<br>');
            };
        };
    } else {
        alert('Строка не должна быть пустой, без символа - ;')
        Inq();
    };
};
Inq();



