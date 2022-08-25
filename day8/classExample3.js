class Employee{

    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    
    get empDetails()
    {
        return `Emp details ${this.name} ${this.tech} ${this.location} ${this.email}`
    } 

    set empEmail(email)
    {
        this.email=email
    }

}


let emp1=new Employee("Addy","Automation","USA")
emp1.empEmail="addy@gmail.com"
console.log(emp1.empDetails);