let ws1=new WeakSet()
console.log(ws1);
let o1={
    fname:"JS"
}
let o2={
    fname:"Cypress"
}
ws1.add(o1)
ws1.add(o2)
console.log(ws1);