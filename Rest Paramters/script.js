

// ES5

function sum(){
    let arr=Array.prototype.slice.call(arguments);

    let result=0;

    arr.foreach(function(item){

        result+=item;

    });

    return result;

}

console.log(sum(15,234,123));


// ES6

function sumES6(...arr){

    let result=0;

    arr.forEach(item=>result+=item);
    return result;

}



function isDriver(age,...years){

    var date = new Date();
    var nowdate=date.getFullYear();

    years.forEach(year=>console.log(nowdate-year>=age))

}

isDriver(1998,1776,2010,2025);