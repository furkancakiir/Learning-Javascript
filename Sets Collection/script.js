
let val;

var  mySet=new Set();

mySet.add(1);
mySet.add(2); // tekil bilgiler içerir ve 2. defa myset add(2) yaptıgımızda ekleme islemi gerceklesmez.
mySet.add(2);
mySet.add('iki');
mySet.add({a:2,b:2});

var obj={a:1,b:2};

mySet.add(obj); 

val=mySet.has(1); // has ile kontrol islemi gerceklestiriyoruz true yada false döner var ise true dönmektedir.

mySet.delete(1); // mysetin içerisindeki 1 elemanını silme islemi gerceklestirecektir.
console.log(val);
console.log(mySet);

for(let item of mySet){
    console.log(item);
}

// Setlerde key ve values aynı değerleri ekrana bastırır entries üzerindende cagırma islemi yapsak 
for(let item of mySet.values()){
    console.log(item);
}
// yukarıdaki islemden bir farkı olmayacaktır yine key ve value degerlerini ekrana basıcaktır.
for(let [key,value] of mySet.entries()){
    console.log(key,value);
}

console.log(Array.from(mySet)); // array metodunun (from propertysi) ile myseti dizi işlemini çevirdik

let mySet2 = new Set([1,2,34,5,6,4,3]);

console.log(mySet2);

// intersect

var intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)));

console.log(intersect);


//difference

var difference = new Set([...mySet].filter(x=>!mySet2.has(x)));
// farkları yazılmıs olur 

console.log(difference);