
const products = [

    {name:'Samsung S6',price:3000},
    {name:'Samsung S7',price:4000},
    {name:'Samsung S8',price:5000},
    {name:'Samsung S9',price:6000},
    {name:'Samsung S10',price:7000}

];




var ProductController =(function(data){

     // private 

     var collection = data || [];
     const addProduct =function(product){
         collection.push(product);
     }

     const removeProduct = function(product){
         
        var index =collection.indexOf(product);

        if(index>=0){
            collection.splice(index,1)
        }

     }

     const getProducts = function(){
         return collection; 
     }


     // public members 

     return {
         addProduct,
         removeProduct,
         getProducts
     }
   

})(products);


// products.forEach(e=>console.log(e));

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);
ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

console.log(ProductController.getProducts());






var extended =(function(m){

    m.sayHello = function(){
        console.log('hello from extended module');
    }

    return m;


})(ProductController || {});


extended.sayHello();

console.log(extended.getProducts());