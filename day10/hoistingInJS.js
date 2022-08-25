//hoisting
a=5
console.log(a);
var a //ReferenceError: Cannot access 'a' before initialization if we use let

show()

function show()
{
    b=10
    console.log(b);
    var b
}

f1()

let f1=function()    //ReferenceError: Cannot access 'f1' before initialization
{
    console.log("I am in f1");
}




