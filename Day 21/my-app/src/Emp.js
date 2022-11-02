function Emp() {
    // App  Logic 
    let  empsArrays =  [
      {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
      {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
      {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
      {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  },
  ];
    return (
       <div> 
            <table border="2"  width="500">
              <tr>
                <th>Empno</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Deptno</th>
              </tr>
  
              {empsArrays.map((item)=>{
                return <tr> 
                <td> {item.empno}  </td>  
                <td> {item.ename}  </td>  
                <td> {item.job}  </td>  
                <td> {item.deptno}  </td>  
           </tr>
              })}
  
            </table>
  
  
      </div>
    );
  }
  
  export default Emp;
  