let val;

const number= new Map();

number.set(1,'One');
number.set('2','Two');
number.set(3,'three');
number.set('four','four');

val=number;
val=number.get(1);
val=number.size;
val=number.has(1); // has if else de kullanılabilir 
val=number.delete(1);
val=number.has(1);
//val=number.clear();
console.log(val);

for(var[key,value]of number){
    console.log(key+'='+value);
}

for(var[key,value]of number.entries()){
    console.log(key+'='+value);
}

for(var key of number.keys){
    console.log(key);
}


for(var key of number.values){
    console.log(value);
}

number.forEach(function(key,value){

    console.log(key+'-'+value);

});


var first = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']    
]);

var second = new Map([
    [4,'four'],
    [5,'five']
]);


var merged = new Map([...first,...second]);

console.log(merged);