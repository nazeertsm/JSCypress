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

let emp1=new Employee("Neha","QA","Mumbai")
let emp2=new Employee("Ashish","QA","Indore")

// export objects 
export {emp1,emp2}

// In case if you want to export complete class
//export {Employee}