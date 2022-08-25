try
{
    let fname="Naveen Kumar"
    console.log(fname.toUpperCase());
}
catch(err)
{
    console.log("Please use only String");
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log("Bye");
}
