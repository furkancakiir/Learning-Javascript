// Object Literal
// let furkan={
//  name:"Furkan",
//  yearOfBirth:1998,
//  job:"Jr Web Developer"
// }

// console.log(furkan);

var date =new Date();
var currentDate =date.getFullYear();

function Person(name,yerOfBirth,job){
    this.name=name;
    this.yerOfBirth=yerOfBirth;
    this.job=job;
    this.calculateAge= function(){
        return currentDate-yerOfBirth;
    }

           
//   let Person=function(name,yearOfBirth,job){
//     this.name=name;
//     this.yerOfBirth=yerOfBirth;
//     this.job=job;
//     this.calculateAge= function(){
//     return currentDate-yerOfBirth;
//     }
//   }  

    console.log(this);


}


let Furkan = new Person('Furkan',1998,'JR Web Developer');
let Ahmet = new Person('Ahmet',1982,'Student');

console.log(Furkan.name,Furkan.yerOfBirth,Furkan.job,Furkan.calculateAge());
console.log(Ahmet.name,Ahmet.yerOfBirth,Ahmet.job,Ahmet.calculateAge());

