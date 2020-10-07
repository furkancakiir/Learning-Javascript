// 1-)Global veriable naming conflicts
// script.js
// var name='Furkan';
 //app.js
// var name='Çakır';
// console.log(name);


// 2)Encapsulation

// var Counter ={
//     number:0,
//     increment:function(){
//         return ++this.number;
//     },
//     decerment:function(){
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number=10;


// IIFE (Immedialtrly Invoked Function Expressions)

// (function(){
//     var name="Furkan";
//     console.log(name);
// })();


// (function(){
//     var name="Çakır";
//     console.log(name);
// })();


// var Module =(function(){

//     // private members

//     let number =0;

//     let increment = function(){
//         return ++number;
//     }

//     let decrement = function(){
//         return --number;
//     }



//     // console.log(increment());
//     // console.log(increment());


//     return {
//         // public members

//         increment,decrement
//     }

// })();

// // console.log(number);
// console.log(Module.increment());    


var Module =(function(){

    let name="Furkan"

    let privateMethod = function(){

        console.log(name);

    };

    return {
        publicMethod : function(){

            let name ="furkan";
            console.log(name);
           


        },privateMethod
        
        
    }
    


}

)();

console.log(Module.publicMethod());





