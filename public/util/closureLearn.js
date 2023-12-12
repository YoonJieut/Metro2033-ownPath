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

class Counter {
    constructor(){
        this.counter = 0;
    }
    
    increase(){
        this.counter += 1;
        return this.counter;
    }
    reset() {
        this.counter = 0;
        return this.counter;
    }
}

const counterClass = new Counter();

console.log("--------------------");
console.log(counterClass.increase());//1
console.log(counterClass.increase());//2
console.log(counterClass.reset());//0
console.log(counterClass.increase());//1

//! 시계 함수 만들기

function createTimer(){
    let start = Date.now();

    return {
        start : function(){
            return start;
        },
        elapsedTime : function(){
            return Date.now() - start;
        },
        reset : function (){
            return start = Date.now();
        }
    }
}
const timer = createTimer();
timer.start();
console.log("경과 시간: ", timer.elapsedTime());
setTimeout(() => {
  console.log("경과 시간: ", timer.elapsedTime());
  timer.reset();
}, 2000);
