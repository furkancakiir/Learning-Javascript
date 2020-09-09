Classes


ES5

var PersonES5 = function(name,job,yearofBirth){this.name=name; this.job=job; this.yearofBirth=yearofBirth;}

var date  = new Date();
var nowDate = date.getFullYear();

PersonES5.prototype.calculateAge=function(){
    return nowDate-this.yearofBirth;
}


var Furkan = new PersonES5('Furkan','Student',1998);

console.log(Furkan.calculateAge());



ES6

class PersonES6{
    constructor(name,job,yearofBirth){
        this.name=name;
        this.job=job;
        this.yearofBirth=yearofBirth;
    }

    calculateAge(){
        return nowDate - this.yearofBirth;
    }

    myName(){
        return this.name;
    }



    static sayHi(){
        console.log("Hello there");
    }


}

let furkan = new PersonES6('Furkan','Teacher',1995)

console.log(furkan.calculateAge());
console.log(Furkan);
console.log(furkan);
PersonES6.sayHi();
console.log(furkan.myName());

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    } 


    static distance(a,b){

        const dx=a.x - b.x;
        const dy=a.y - b.y;


        return Math.hypot(dx,dy);

    }


}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

Point.distance(d1,d2);

console.log(Point.distance(d1,d2));
