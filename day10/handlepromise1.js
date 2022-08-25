
let f1=function()
{
    return "I am in f1";
}

let f2=function()
{
      return new Promise(function(resolve,reject){

        setTimeout(function(){

            reject("I am in f2")

        },20000)

      })
}

let f3=function()
{
    return "I am in f3";
}

let callAllFunction= async function (){
    let r1=f1()
    console.log(r1);

    let r2=await f2()
    console.log(r2);

    let r3=f3()
    console.log(r3);
}

callAllFunction()