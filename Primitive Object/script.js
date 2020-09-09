var a =10;
var b=a;


var obj1={
    name:'Furkan',
    age:21
}


var obj2=obj1;
obj1.age=22;

console.log(obj1.age);
console.log(obj2.age);


var num=50;

var account={
    name:'Furkan',
    accountNumber:'1231245',
}

function update(a,b){

    a=100;
    b.accountNumber='3213214';

}

update(num,account);

console.log(num);
console.log(account);



var products = [
    {name:'product name',price:1000},
    {name:'product name',price:1000},
    {name:'product name',price:1000},
    {name:'product name',price:1000},
    {name:'product name',price:1000},
    {name:'product name',price:1000},
    {name:'product name',price:1000} 

]

function filterProduct(prd){

    
}

filterProduct(products);