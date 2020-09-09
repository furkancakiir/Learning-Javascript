var a,b,rest;
//Destructuring assignment
[a,b]=[10,20];
console.log(a);
console.log(b);

[a,b,...rest]=[10,20,34,12321,421,321,412,321,4];
console.log(a);
console.log(b);
console.log(rest);


({a,b}={a:10,b:20});
console.log(a);
console.log(b);

({a,b,...rest}={a:10,b:20,c:1254,d:124123,f:124125});
console.log(a);
console.log(b);
console.log(rest);


// Array destructuring

const arrConfig=['localhost','8080','900'];

//ES5

// var server=arrConfig[0];
// var port=arrConfig[1];
// var timeOut=arrConfig[2];

// console.log(server,port,timeOut);

//ES6 Destructring

const[server,port,timeout]=arrConfig;
console.log(server,port,timeout);


// Object Destructing 

const objConfig={
    server:'localhost',
    port:'8080',
    timeout:800
    
}

// let {server,port,timeout=900}=objConfig;

// var server =objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;

// console.log(server,port,timeout);

// const {server,port,timeout}=objConfig;

// console.log(server,port,timeout);

// let {timeout:t}=objConfig;


const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];

const [,,wed,,fri]=days; // Öteleme işlemi için ,, kullanılır.

console.log(wed,fri);