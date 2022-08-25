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

module.exports=Employee