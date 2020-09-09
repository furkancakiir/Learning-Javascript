
ES5
let list={
    category:'phone',
    names:['Iphone 8','Samsung S8','Iphone 7'],
    call:function(){
    var self=this;    
    this.names.map(function(name){
                 console.log(`${self.category} ${name}`);

    })}
}

ES6
let list={
    category:'phone',
    names:['Iphone 8','Samsung S8','Iphone 7'],
    call:function(){ 
    this.names.map((name)=>{
    console.log(`${this.category} ${name}`);

    })}
}

ES5
function Game(){
    this.live=0;
    this.addLive=function(){
        var self=this;
        this.OneUp = setInterval(function(){
                      console.log(++self.live);
        },1000)
    }
}

function Game(){
    this.live=0;
    this.addLive=function(){
        this.OneUp = setInterval(()=>{
                      console.log(++this.live);
        },1000)
    }
}




let player= new Game();
player.addLive();