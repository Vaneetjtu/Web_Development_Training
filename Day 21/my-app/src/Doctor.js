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
          return  <DoctorDetails name={item.Name}/>
        })
    )
}
export default Doctors