import {  useState } from 'react';
import './Register.css';
 
function Register()
{
    const [result, setResult] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({  
            uname  :  "",            
            password  :  "",            
            email :  ""
    });
   
    

    function onSubmitClick(event)
    {
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.uname =  (uname.length == 0)? "User Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        
        setErrors(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        console.log(valuesArray);
        let index  = valuesArray.findIndex( item => item.length != 0 );

        if(index == -1)
        {
                // Logic to send this data to server using AJAX              
              setResult("Submit button clicked --- Form Data is Valid");              
        }
        else
        {           
         
           setResult("Submit button clicked --- Form Data is invalid");
        }
    }

    

 
    return (
        <div>
            <h3>Data Entry Forms - Validations in React JS </h3>
            <hr/>

            <fieldset>
                <legend>User Registration</legend>

                <form  onSubmit={onSubmitClick}  noValidate>

                 User Name  :  <input type="text" name="uname" onChange={(e) => setUname(e.target.value)}  />
                 <span className="error">{errors.uname}</span>
                 <br/><br/>

                 Password  :  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  />
                 <span className="error">{errors.password}</span>
                 <br/><br/> 

                 E-mail  :  <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}  />
                 <span className="error">{errors.email}</span>
                 <br/><br/> 
                <input type="submit"   value="Register"  />
                <h3>{result}</h3>

                </form>    

            </fieldset>

        </div>
    );   
}

export default Register;