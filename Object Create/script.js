// Object.create

var date = new Date();
var nowDate =date.getFullYear();

let personProto={
    calculateAge:function(){
     return nowDate-this.yearOfBirth;
    }
}


let furkan =Object.create(personProto);

let x=object.create(personProto,{

    name:{value:'X'},
    yearOfBirth:{value:1995},
    job:{value:'X'}

});

furkan.name="Furkan";
furkan.yearOfBirth=1998;
furkan.job='Student';

console.log(furkan.calculateAge());