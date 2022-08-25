class Employee{

    getEmpDetails(name)
    {
        console.log(name);
    } 

    getEmpDetails(name,age)
    {
        console.log(name + " "+age);
    } 

    getEmpDetails(name,age,location)
    {
        console.log(name + " "+age+" "+location);
    } 
}

let emp1=new Employee()
emp1.getEmpDetails("Nitya")
