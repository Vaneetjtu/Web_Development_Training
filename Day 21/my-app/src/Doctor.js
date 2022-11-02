import { Children } from 'react';
import DoctorDetails from './DoctorDetails';
const Doctors=()=>{
    const doc=[
        {Name:"Harry"},
        {Name:"Larry"},
        {Name:"Barry"},
        {Name:"Garry"},
        {Name:"Marry"},
    ]
    return(
        doc.map((item)=>{
          return  <div style={{border:"1px solid Gray", marginBottom: "10px"}}>
                <DoctorDetails name={item.Name}/>
            </div>
        })
    )
}
export default Doctors