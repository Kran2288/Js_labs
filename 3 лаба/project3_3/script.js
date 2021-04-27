const a = [1,[1,2,['as',34]],2,3,4];

Copy()
function Copy(){
    console.log(a);
    let arrcopy = [...a];
    // let arrcopy_change = arrcopy.push('233')  Если хотим изменить скопированный массив
    console.log(arrcopy);
}

