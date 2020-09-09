





// Person Constructor
function Person(name){
    this.name=name;

}

Person.prototype.Introduce = function(){
    console.log("Hello My Name is"+this.name);
}

Student.prototype.study=function(){
    console.log("Benim Sınıf Numaram"+this.numbers+'I already studied hard');
}

//Teacher Constructor

function Teacher(name,branch){
    Person.call(this,name);
    this.branch=branch;
}

// Student Constructar

function Student(name,numbers){
    Person.call(this,name);
    this.numbers=numbers;

}

function Headmaster(name,branch){
    Teacher.call(this,name,branch);
}

Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype=constructor=Headmaster;

Headmaster.prototype.shareTask=function(){
    console.log('I we already  shared all the work');
}


Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;


Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
Teacher.prototype.Teach=function(){
    console.log("I am branch"+this.branch);
}



let p1=new Person('Furkan'); 
let t1= new Teacher('Furkan','Math');
let s1 = new Student('Ahmet','100');

s1.Introduce();


// s1.Introduce();
// p1.Introduce();
// t1.Introduce();
// t1.Teach();

let h1 = new Headmaster('Ahmet','Math');

h1.Introduce();
h1.shareTask();