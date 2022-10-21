 
var  empModule  =  require("./EmpModules");

let  e1  =  empModule.getEmployee();
let  str  =  `Empid :  ${e1.empno},   Name  :  ${e1.ename} , Job :  ${e1.job}, Deptno : ${e1.deptno}`;
console.log(str);
console.log("----------------------------------------------");



let arr =  empModule.getEmployees();

 
 for(let item  of  arr)
 {
	 	 str  =  `Empid :  ${item.empno},   Name  :  ${item.ename} , Job :  ${item.job}, Deptno : ${item.deptno}`;
		 console.log(str);
 }


