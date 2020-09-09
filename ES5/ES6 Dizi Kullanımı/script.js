const boxes=document.querySelectorAll('.box');

// console.log(boxes);


 let boxesES5=Array.prototype.slice.call(boxes);

// boxesES5.foreach(function(box){

//      box.style.backgroundColor='green'
// });

//ES6
// Array.from(boxes).forEach(box=>box.style.backgroundColor='green');


//ES5
// for(let i=0; i<boxesES5.length; i++){
//     if(boxesES5[i].className=='box blue'){
//         continue;
//     }
//     boxesES5[i].textContent='I m Changed';
//     boxesES5[i].style.backgroundColor='blue';
// }

// var boxesES6=Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }
//     box.textContent='I am changed';
//     box.style.backgroundColor='blue';
// }


// FROM

let arr=Array.from('Modern JS ');

console.log(arr);

const products = [
    {name:'Furkan',surname:'Çakır'},
    {name:'Ahmet',surname:'Çakır'},
    {name:'Mustafa',surname:'Çakır'}
]

console.log(Array.from(products,prd=>prd));