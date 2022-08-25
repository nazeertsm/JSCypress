let m1=new Map()
console.log(m1);
m1.set("name","JavaScript")
m1.set("address",{
    state:"KA",
    pincode:78787
})
m1.set("marks",[90,89,89])
console.log(m1);
//m1.clear();

console.log(m1.get("pavan"))
console.log(m1.has("address")); //keys
console.log(m1.delete("address1"));
console.log(m1);
console.log(m1.size);

m1.forEach(function(x,y){
    console.log(y+" "+x) ; // value
   
})

for(let [x,y] of m1){
    console.log(y);
}

console.log(m1.keys());
console.log(m1.values());