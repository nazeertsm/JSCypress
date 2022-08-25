/*
    If you are using require for export then no need of package.json file but if you have then you 
    need to comment or remove file

    But for ES6 import export we need package.json type:module

*/

let Employee=require("./classExampleUsingRequire")

//import { Employee } from "./classExample4.js"

let emp1=new Employee("Sampada","QA","USA")

emp1.getEmpDetails()

let emp2=new Employee("Ahmed","QA","Aus")

emp2.getEmpDetails()