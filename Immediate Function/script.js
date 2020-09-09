// function welcome(){
//     var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Saturday'];
//     var toDay=new Date();
//     var msg = 'Welcome.Today is '+day[toDay.getDay()];
//     return msg;
// }

// (function(){


// })();


(function(name){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Saturday'];
    var toDay=new Date();
    var msg = 'Welcome'+name+'.Today is '+day[toDay.getDay()];
    console.log(msg);

}('Furkan Bey'));

