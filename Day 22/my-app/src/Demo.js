import {useState} from 'react';


function  Demo()
{     

    let [message, setMessage]  =  useState("");
    let [uid, setUid]  =  useState("");
      
    function  inputChange(event)
    {   
         setUid(event.target.value);       
    }

    function  buttonClick()
    {           
        setMessage ("Welcome to " + uid);        
    }

    return (
        <>

            <h3>Event Handling in React</h3>
            <hr/>
            <input type="text"  id="t1"  onChange={inputChange}  />
            <button onClick={buttonClick}>Get Data</button>
            <h3>{message}</h3>            
        </>
    );
}

export default Demo;