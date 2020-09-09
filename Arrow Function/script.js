// Arrow Function


// ES5
let welcomeES5=function(){
    console.log("Welcome ES5");
}

welcomeES5();


//ES6

let welcomeES6 =()=>{

      console.log("HELLO FROM ES6");
}

welcomeES6();


// with paramaters 

let multipleES5=function(a,b){
     
    return a*b;
}
multipleES5(10,5);

let multipleES6=(b,c)=>{
    return b*c; 
}

let multipleEES6=(x,z)=>x*z; 

multipleES6(25,15);


let splitES5 =function(text){
    return text.split(' ');
}

console.log(splitES5('Furkan Çakır Merhabalar Nasılsınız'));


let splitES6 =text=>text.split(' ');

console.log(splitES6('JAVASCRİPT ARROW FUNCTİON'));


// ES5 OBJECT LİTERAL

let getProductES5=function(id,name){
    return{
        id:id,
        name:name
    }
}
console.log(getProductES5('24','Iphone XR'));


// ES6 Object Literal

let getProductES6=(id,name)=>({
    id:id,
    name:name
});

console.log(getProductES6('1','Iphone 11'));



const phones=[

    {name:'İphone 8',price:3000},
    {name:'Iphone 11',price:5000},
    {name:'Iphone 6S',price:3200},
    {name:'Iphone SE',price:6000}

];

// ES5
let pricesES5=phones.map(function(phone){
   
    return phone.price;

});

console.log(pricesES5());
// ES6
let priceES6=phones.map(phone=>phone.price);
console.log(priceES6());

const arr=[12,23,412,521,312,412,512,6,124,123,12];

// ES5
let evenES5=arr.filter(function(a){

    return a%2==0;
});

console.log(evenES5());

// ES6

let evenES6=arr.filter(a=>a%2==0);

console.log(evenES6);