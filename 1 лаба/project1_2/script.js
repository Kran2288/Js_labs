let arr = [];
for (let i = 1; i <= 9; i++) {
    arr[i] = [];
    for (let t = 1; t <= 9; t++) {
        arr[i].push(i * t);
    }
}
console.table(arr);