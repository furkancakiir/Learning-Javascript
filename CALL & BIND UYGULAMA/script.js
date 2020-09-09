var num={
    min:0,
    max:100,
    checkNumericRange:function(value){
            
        if(typeof value!=='number'){
            return false;
        }else{
            return value>=this.min  && value<=this.max;
        }

    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

console.log(num.checkNumericRange.call(num1,55));
console.log(num.checkNumericRange(num1,[55]));


var checkNumber = num.checkNumericRange.bind(num1)
console.log(checkNumber(66));