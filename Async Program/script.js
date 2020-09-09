const first = ()=>{

    console.log('First');
    second();
}

const second =()=>{
    setTimeout(()=>{
        console.log('second');

    },2000)
   
    third();
}

const third = ()=>{
    console.log('third');
}



first();