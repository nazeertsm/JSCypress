class Employee{

    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    
    getEmpDetails()
    {
        console.log(`Emp details ${this.name} ${this.tech} ${this.location} ${this.email}`);
    } 

    setEmpEmail(email)
    {
        this.email=email
    }

}


//Everytime you create object- constructor will be called automatically
let emp1=new Employee("Anurag","Dev","Pune")
emp1.setEmpEmail("anurag@gmail.com")
emp1.getEmpDetails()

let emp2=new Employee("Rahul","QA","Bhopal")
emp2.setEmpEmail("rahul@gmail.com")
emp2.getEmpDetails()

let emp3=new Employee("Nikhil","QA","Bangalore")
emp3.getEmpDetails()