var str1='Furkan';

var str2= new String('Furkan');


console.log(typeof str1);
console.log(tr2);



String.prototype.repeat=function(n){

    return new Array(n+1).join(this);
}

console.log('Furkan'.repeat(3));


// Number

var num1 = 10;
var num2 = new Number(10);


//Boolean

var bool1= true;
var bool2 = new Boolean(true);

// Object

var obj1 ={
    name:'Furkan'
}

var obj2= new Object({

    name:'Furkan'

});


// Array

var arr1 = ['Furkan','Çakır','Gamze'];
var arr2 = new Array('Furkan','Gamze','Caner','Gökhan');




Array.prototype.remove=Array.prototype.remove || function(member){
    var index=this.indexOf(member);

    if(index>-1){
        this.splice(index,1);
    }
    else
    {
    return this;
    }

    console.log(arr1.remove('Furkan'));
}