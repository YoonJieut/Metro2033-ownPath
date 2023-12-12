
let test = 0;

function closureFunc(){
    return function(){
        return test++
    }
}

console.log(test);
console.log(closureFunc);
console.log(test);
console.log(closureFunc);
console.log(test);
console.log(closureFunc);
console.log(test);
console.log(closureFunc);
console.log(test);