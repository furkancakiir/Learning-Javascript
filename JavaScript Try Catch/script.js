// // ReferenceError
// // TypeError
// // SyntaxError
// // URIError

// var user={
//     name:'Furkan Çakır'
// }



// try {
  
//     console.log(user.name);
//     console.log(user.email);

//     if(!user.email){
//         throw new SyntaxError('User has no email');
//     }

// //console.log(myFunction());


// } catch (error) {


//     //  console.log(error);
//     //  console.log(error.message);
//     //  console.log(error.name);
//     //  console.log(error instanceof ReferenceError);
//     //  console.log(error instanceof TypeError);
//     //  console.log(typeof error);
// }

// finally{
//     console.log('finally block');
// }



document.getElementById('myBtn').addEventListener('click',function(e){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';
    try{
        if(name.value.length === 0){
            throw new Error('name is required');
        }

        if(name.value.length > 20){
            throw new Error('name is too long');
        }

        if(age.value.length === 0){
            throw new Error('age is required');
        }

        if(isNaN(age.value)){
            throw new Error('age is not numeric');
        }

        console.log('form is submitted');

    } catch(err){
        errors.innerHTML = err.message;
    }finally{
        name.value = '';
        age.value = '';
    }

 

    e.preventDefault();
});