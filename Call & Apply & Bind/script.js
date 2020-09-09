var welcome=function(a,b){
    console.log('Welcome '+ this.name + '.Are you interested in' +a+'and'+b);

}

var furkan={name:'Furkan'};
var deneme={name:'Deneme'};

welcome.call(furkan, 'ASP.NET', 'Angular');   // CALL METODU İLE APPLY METODU ARASINDAKİ FARK BİRİSİ DİZİ ŞEKLİNDE GÖNDERİLİR.
welcome.call(deneme,'ASP.NET','Angular');   // TEK TEK PARAMETRE KULLANARAK GÖNDEREMEYİZ.
                                           // CALL METODUNU Kalıtım konusundada kullanmaktayız.

welcome.apply(furkan,['ASP.NET','ANGULAR']);
welcome.apply(deneme,['C#','PHP']);

welcomeFurkan=welcome.bind(furkan);  // COMEFURKAN welcome metodundan beslenerek bind ederek comeFurkan() METOD HALİNE GELMEKTEDİR.

welcomeFurkan('ASP.NET','FURKAN');

welcomeDeneme=welcome.bind(deneme)

welcomeDeneme();