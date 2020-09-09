// SUB CLASSES


//ES5

function personES5(firstName,lastName){

    this.firstName=firstName;
    this.lastName=lastName;

}

personES5.prototype.sayHi=function(){
    return `Hello I'M ${this.firstName} ${this.lastName}`
}

function customerES5(firstName,lastName,phone,username){
    personES5.call(this,firstName,lastName); // Constructora göndererek özelliklere sahip oluyoruz.
    this.phone=phone; // mevcut olanları this keywordunu kullanarak belirtiyoruz.
    this.username=username;

}

customerES5.prototype=Object.create(personES5.prototype); // prototype metotlarını customeres5 tarafındanda kullanılabilir olmaktadır.

var customer = new customerES5('Furkan','Çakır','5455220349','furkancakir');

console.log(customer.sayHi());
console.log(customer);


//ES6

class personES6{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    sayHi(){

        return `I am ${this.firstName}${this.lastName}`

    }
}

class customerES6 extends personES6{

    constructor(firstName,lastName,phone,username){
        super(firstName,lastName);
        this.phone=phone;
        this.username=username;
    }

    static getTotal(){
        return 1000;
    }

}

let customer1  = new customerES6('furkan','çakır','199545','berfur2855');

console.log(customer1.sayHi());
console.log(customer1);
console.log(customerES6.getTotal()); 