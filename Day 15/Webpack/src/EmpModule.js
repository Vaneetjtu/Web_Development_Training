module.exports.getEmployee  =  function()
{
	let  empObj  =  {empno :  15454,  ename  : "Scott",  job :  "Manager", deptno : 10};
	return empObj;		
} ;



exports.getEmployees  =  function()
{
	let  empArray  =  [
					{empno :  15454,  ename  : "Scott",  job :  "Manager", deptno : 10},
					{empno :  15455,  ename  : "Smith",  job :  "Lead", deptno : 20},
					{empno :  15456,  ename  : "Sandy",  job :  "Manager", deptno : 30}
		];		
		
	return empArray;		
} ;


console.log(exports.getEmployee());