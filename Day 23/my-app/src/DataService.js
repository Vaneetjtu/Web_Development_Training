import   axios  from "axios";

let dataSericeObj = {};

let url =  "http://localhost:3000/emp/";

dataSericeObj.getAllEmp=()=>{
    return axios.get(url);
}
dataSericeObj.getEmpById=(empid)=>{
    return axios.get(url+empid)
}
dataSericeObj.addEmp=(empObj)=>{
    return axios.post(url,empObj);
}
dataSericeObj.updateEmp=(empObj)=>{
    return axios.put(url+empObj.empid,empObj);
}
dataSericeObj.deleteEmp=(empid)=>{
    return axios.delete(url+empid);
}

export default dataSericeObj;
 