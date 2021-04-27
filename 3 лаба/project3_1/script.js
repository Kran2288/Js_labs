

// function Text(b){
    
//     let arr = b.split();
    
//     if (b != '' &&  b != null){
//         alert('Это палиндром');
//     } else {
//         alert('Это не палиндром');
//         Text(prompt('Введите текст занаво'));
//     }

// }
// Text(prompt('Введите текст'));


const input = prompt('Введите слово', '');
const word = input.toLowerCase();

function reverse(word) {
    let reversedWord = word.split('').reverse().join('').toLowerCase();
    return reversedWord;
}

if (word === reverse(word)) {
    alert('Слово является палиндромом');
} else {
    alert('Слово не является палиндромом');
}

