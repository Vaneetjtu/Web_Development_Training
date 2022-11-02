import 'bootstrap/dist/css/bootstrap.min.css';
import img from './download.jpg';
const DoctorDetails=(props)=>{
    let details=[
        {Name:"Harry", Age: 39, Degree: "MD", Dept:"Dentist", Exp: 10},
        {Name:"Larry", Age: 30, Degree: "MD", Dept:"Urology", Exp: 8},
        {Name:"Barry" , Age: 27, Degree: "MBBS", Dept:"Surgery", Exp: 2},
        {Name:"Garry" , Age: 40, Degree: "MD", Dept:"Eye Specialist", Exp: 18},
        {Name:"Marry" , Age: 45, Degree: "DM", Dept:"Cardiologist", Exp: 22},
    ]
    return(
        details.map((item)=>{
            if(item.Name===props.name)
            {
                return <div class="card-deck">
                <div class="card">
                  <img src={img} style={{width: "100px", height: "100px", border: "2px", borderRadius: "5px", alignContent: "center"}} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 style={{textAlign: "center"}} class="card-title">{item.Name}</h5>
                    <p style={{textAlign: "center"}} class="card-text">{item.Age}</p>
                    <p style={{textAlign: "center"}} class="card-text">{item.Degree}</p>
                    <p style={{textAlign: "center"}} class="card-text">{item.Dept}</p>
                    <p style={{textAlign: "center"}} class="card-text">{item.Exp}</p>
                  </div>
                  </div>
                  </div>
            }
        })
        )
}
export default DoctorDetails;