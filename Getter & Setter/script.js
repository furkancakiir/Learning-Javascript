  
const person = {
    firstName : 'Furkan',
    lastName : 'Çakır   '
}


Object.defineProperty(person,'fullName',{ 
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : false
})

person.age = 55;

console.log(person.age);