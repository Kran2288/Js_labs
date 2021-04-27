 let a = prompt("введите какие числа вы хотите перемножить");
 let b = prompt("введите какие числа вы хотите перемножить");

 let arr = [];
 if(a<=5 && a>=0 && b<=5 && b>=0){
    for(let j = 0; j<=5; j++){
        arr[j] = [];
        for(let i = 0; i<=5; i++){
            arr[j].push(j*i);
        }};
        console.log(arr[a.trim()][b.trim()]);
} else {
     console.log('Не правильно введены данные');
 };
 












