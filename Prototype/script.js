
var date =new Date();
var currentDate =date.getFullYear();

let Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}

Person.prototype.calculateAge=function(){
    
        return currentDate-this.yearOfBirth;
    
    }


Person.prototype.getName=function(){
       
    return this.name;

}

Person.prototype.getJob=function(){
    return this.job;
}

      



let furkan = new Person('Furkan',1998,'Stundent');
let ahmet = new Person('Ahmet',1982,'Teacher');

console.log(furkan.calculateAge());
console.log(ahmet.calculateAge());
console.log(furkan.getName());
console.log(furkan.getJob());

