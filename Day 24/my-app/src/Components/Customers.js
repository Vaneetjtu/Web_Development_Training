import React  from 'react';
import axios  from 'axios';
 
export class Customers extends React.Component
{ 
    state = {
        customersArray  : []
    };

    componentDidMount()
    {
       let url  = "https://www.w3schools.com/angular/customers.php";
       axios.get(url).then(resData  => 
        {            
           const customersArray = resData.data.records;                       
           this.setState( {customersArray} );
        });
    }

    render()
    {
      return <div style={{marginLeft:"10%", marginRight : "10%", width : "80%"}}>
                <h3 >Customers Information from W3Schools</h3>
                <hr/>
                 
                {this.state.customersArray.map( item => 
                    <div class="card">
                        <span>{item.Name}</span> <br/>
                        <span>{item.City}</span>  <br/>
                        <span style={{color:"yellow"}}>{item.Country}</span>
                    </div>
                    )}   
            </div>;
    }    

}

export default Customers;
