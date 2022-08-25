let person={
    fname:"Cypress",
    lname:"Automation",
    age:30,
    fun1: function(num1)
    {
        console.log("I m inside function "+num1);
    },
    fun2: (num1)=>{
        console.log("I m inside arrow function "+num1);
    } 
}
//console.log(person);
person.location="Bangalore"
//console.log(person);
person.location="Pune"
//console.log(person);
person.phone=[7878,9090,909]
//console.log(person);

//delete person.location
delete person["location"]
//console.log(person);

//person.fun1(20)
//person.fun2("Mukesh")
// for in for object and for of works with array,string etc

/*for(let key of person)
{
    //console.log(key);
    console.log(person[key]); // only use bracket annotation

    if(key)
    {

    }

    //console.log(person.key); does not work
}
*/

delete person
console.log(person);


