function Employee(name,salary){
   
    if(!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    this.name=name;
    this.salary=salary;


}


Employee.prototype.calculateSalary=function(){
    var month = new Date().getMonth()+1;
    var text=0;
    var total=this.salary*month;
    

    if(this.salary<=20000){

        text=total*0.2;
    }
    else if(total>20000 && total<=30000){
        text=total*0.25;
    }
    else{
        text=total*0.3;
    }

    return {
        text:text,
        paid:total-text
    }
}


var emp1 = new Employee('Furkan',5000);
emp1.calculateSalary();
var emp1_salary=emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.text} vergi kesintisi ile ${emp1_salary.paid} maas almıştır`);

var emp2 = new Employee('Cansu',6000);
var emp2_salary=emp2.calculateSalary();
