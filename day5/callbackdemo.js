function show(value){
    console.log("Result is ",value);
}

function sum(a,b,c,chetna)
{
    let result=a+b+c
    //console.log();
    chetna(result)
}

sum(100,200,300,show)



