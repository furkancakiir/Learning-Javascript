
let val;

function MultipleByTow(a,b,c,callback){
    let arr=[];

    for(let i=0; i<3; i++){
        arr[i]=callback(arguments[i]*2);
    }

    return arr;
}

function addOne(a){
    return a+1;
}
function addTwo(a){
    return a+2;
}
function addThere(a){
    return a+3;
}

val=MultipleByTow(5,12,31,
    function(a){
          return a+1;


});
// val=MultipleByTow(5,14,23,addOne);
//vall =addOne(15);

// for(let i=0; i<val.length; i++){
//     val[i]=addOne(val[i]);
// }




console.log(val);