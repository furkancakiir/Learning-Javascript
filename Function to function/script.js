function Question(){
    switch(hobby){
        case'car':
            return function(name){
                 console.log(name+'Do you have car ? :)')
            }
        break;

        case'book':
        return function(name){
            console.log(name+'What is your favoruite book ? :)')
       }

        break;

        case'software':
        return function(name ,type){
            console.log(name+'Are you interested '+type+ '? :)')
       }

        break;
        
       

        default:
            return function(name){
                console.log(name+'How are you :)');
            }


    }



}


var carQuestion = Question('car');

carQuestion('Furkan');

var bookQuestion = Question('book');
bookQuestion('Ahmet');


var softwareQuestion = Question('software');
softwareQuestion('Furkan','ASP.NET')
softwareQuestion('Ahmet','Node.js')