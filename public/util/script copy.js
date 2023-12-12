

function closureTest (){
    let count = 0;
    return function(){
        count++
        return count
    }
}
const a = closureTest();
console.log(a());
console.log(a());
console.log(a());
console.log(a());