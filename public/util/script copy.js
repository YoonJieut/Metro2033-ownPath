

function closureTest (){
    let count = 0;
    console.log(count);
    return function(){
        count++
        return count
    }
}

closureTest();
closureTest();
closureTest();