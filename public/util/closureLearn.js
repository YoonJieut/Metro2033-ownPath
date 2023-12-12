function createCounter () {
    let count = 0;

    return {
        increase : function(){
            count +=1
            return count;
        },
        reset : function(){
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increase()); //1
console.log(counter.increase());//2
console.log(counter.reset());//0
console.log(counter.increase());//1