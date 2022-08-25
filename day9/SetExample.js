let s1=new Set()
s1.add(10)
s1.add(10)
s1.add("JavaScript")
s1.add(true)

console.log(s1);
//s1.clear()
console.log(s1);
s1.delete(10)
console.log(s1);
console.log(s1.size);
console.log(s1.has("JavaScript"));

/*
    Iterate all values using loop in Set
    convert array into set
*/
