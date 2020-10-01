var products = [
{id:1,name:'Samsung S8',price:3000},
{id:2,name:'Samsung S9',price:2000},
{id:3,name:'Samsung S10',price:1500}

]

let added = true; // false yapılırsa hata gösterir.

function addProduct(prd,callback){

    return new Promise(function(resolve,reject){

        setTimeout(()=>{
          products.push(prd);
          let added = true;

          if(added){
              resolve();
          }
          else{
              reject('Hata:400');
          }

        });

    });
   
   
}

function getProducts(){

    setTimeout(() => {

        products.forEach(p=>{
            console.log(p.name);
        });
        
    }, 1000);

}


addProduct({id:4,name:"SamsungS123",price:500})
.then(getProducts).catch(function(err){
    console.log(err);
});

