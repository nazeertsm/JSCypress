let m1=new WeakMap()
console.log(m1);
//m1.set("name","JS") throw TypeError  Invalid value used as weak map key
console.log(m1);

let o1={
    name:"Java"
}

let o2={
    name:"Python"
}
m1.set(o1,"Object1")
m1.set(o2,"Object2")

console.log(m1.get(o2));



