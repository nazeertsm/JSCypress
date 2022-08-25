class Employee{

    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }

    getEmpDetails()
    {
        console.log(`Emp details ${this.name} ${this.tech} ${this.location}`);
    } 
}

let emp1=new Employee("Anurag","Dev","Pune")
emp1.getEmpDetails()

let emp2=new Employee("Rahul","QA","Bhopal")
emp2.getEmpDetails()

let emp3=new Employee("Rahul","QA","Bangalore")
emp3.getEmpDetails()