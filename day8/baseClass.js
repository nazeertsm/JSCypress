class Employee{

     /*
        name
        tech
        location
    */
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

class HR extends Employee{

    /*
        name
        tech
        location
        numberOfLeave
    */
    constructor(name,tech,location,numberofLeave)
    {
        super(name,tech,location)
        this.numberofLeave=numberofLeave
    }

    approveLeave()
    {
        console.log(`Leave Approved for ${this.numberofLeave}`);
    }
}

let hr1=new HR("Rashi","HR","Chennai",10)
hr1.getEmpDetails()
hr1.approveLeave()