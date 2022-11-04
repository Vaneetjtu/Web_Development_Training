import dataSericeObj from "./DataService";
import { useState } from "react";

const Emps=()=>{
    const [empArray,setEmpArray]=useState([]);
    const [empid,setEmpid]=useState(0);
    const [empname,setEmpName]=useState("");
    const [emptitle,setEmpTitle]=useState("");

    const getDataClick=()=>{
        dataSericeObj.getAllEmp().then((res)=>{
            res.data.sort((a, b) => a.id - b.id);
           setEmpArray(res.data)
       })
    }

    const addDataClick=()=>{
        const empObj={
            id: empid,
            empname: empname,
            emptitle: emptitle
        }
        dataSericeObj.addEmp(empObj).then(()=>{
            alert("Details added");
            getDataClick();
        })
    }

    const removeDataClick=(empid)=>{
        dataSericeObj.deleteEmp(empid).then(()=>{
            alert("Deleted");
            getDataClick();
        })
    }

    const selectDataClick=(empid)=>{
        dataSericeObj.getEmpById(empid).then((res)=>{
            setEmpid(res.data.id)
            setEmpName(res.data.empname);
            setEmpTitle(res.data.emptitle);
        })
    }

    const updateDataClick=()=>{
        const empObj={
            id: empid,
            empname: empname,
            emptitle: emptitle
        }
        dataSericeObj.updateEmp(empObj).then(()=>{
            alert("Updated");
            getDataClick();
        })
    }
        return(
            <div> 
            <h3>Making HTTP Request using Axios Package</h3>
            <hr/>

            <input type="number" value={empid} placeholder="Emp Id"  
            onChange={(e) => setEmpid(e.target.value)}   />

            <input type="text" value={empname} placeholder="Emp Name"  
            onChange={(e) => setEmpName(e.target.value)}   />

            <input type="text" value={emptitle} placeholder="Title"  
            onChange={(e) => setEmpTitle(e.target.value)}   />
            <br/><br/>  


            <button onClick={getDataClick}>Get Emps</button>
            <button onClick={addDataClick}>Add Emp</button>
            <button onClick={updateDataClick}>Update Emp</button>
            <br/><br/>
            <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>Emp Id</th>
                  <th>Name</th>                
                  <th>Title</th>
              </tr>
              </thead>

              <tbody>
                {empArray.map( (item) =>  
  { 
    return  <tr>                
             <td> {item.id}  </td>  
             <td> {item.empname}  </td>                
             <td> {item.emptitle}  </td>  
             <td>
               <a href="#" onClick={ () => removeDataClick(item.id)}> Delete </a>  |   
               <a href="#" onClick={ () => selectDataClick(item.id)}> Select </a>  |   
          </td>
        </tr>})}
              </tbody>               
            </table> 
      </div>
        );
  }
export default Emps;