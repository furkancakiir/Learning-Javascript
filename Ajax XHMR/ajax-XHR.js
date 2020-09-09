var xhr  = new XMLHttpRequest();

xhr.onreadystatechange= function(){
    if(xhr.readyState===4){

        if(xhr.status===20){
            console.log(xhr.responseText);
        }
        else if(xhr.status===404){
            console.log('Kaynak Bulunamadı');
        }
        
    }
}

// serverdan bir talepte bulunurken bilgi ekranı getirirken kullanıcya gif loading image göstermek istediğinizde kullanılabilir ..
xhr.onprogress = function(){
    console.log("On Progressing");
}
// POST İSE UPLOAD YAPILIRKEN VT GÜNCELLENİRKEN  KULLANILIR DOSYA GETİRMEDE İSE GET 
xhr.open('GET','text',true); // true asenkron false ise senkron yapar senkron oldugunda get islemi bitmeden baska bir islemi yapmaz
xhr.send(); 

console.log('hello');

/*♣♣•◘◘
 readyState : Özellikleri 
// request henüz başlatılmamış 

0: request not initialized 

// server connection kurulmuşa 1 değerini alırız 
1: server connection established

// request alınmışsa 2 gelmektedir
2: request received 

// request alınmışsa ve serverde işletilmekteyse sonuc döndürmesini bekliyorsak 3 değeri gelir ..
3: processing request 

// if bloğunda kullandımığız response ready ve hazırsa 4 gelir 
4: request finished and response is ready


status :
200: "OK" SONUCUN BAŞARILI OLDUĞUNU GÖSTERİR 
403: "Forbidden"// TALEBİN ONAYLANMADIGINI GÖSTERİR 
404: "Not Found"  // 404 HATASINI GÖSTERİR 

*/