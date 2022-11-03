import {useState}  from 'react';

function Login()
{
    let [uid, setUid]  = useState("");
    let [pwd, setPwd]  = useState("");
    let [result, setResult]  = useState("");

    function inputUidChange(event)
    {
        setUid(event.target.value);   
    }

    function inputPwdChange(event)
    {
        setPwd(event.target.value);   
    }


    let loginClick  = function()
    {
        let  str  = "";
        if(uid == "admin" && pwd == "admin123")
        {
            str  = "Welcome to Admin";
        }
        else
        {
            str  = "Invalid user id or password";
        }

        setResult(str);
    };

    return (
        <>
            <h3>Working with Multiple State</h3>
            <hr/>

            <fieldset>
                <legend>User Login</legend>
                User Id  : 
                <input type="text"  onChange={inputUidChange}  />
                <br/><br/>
                Password : 
                <input type="password"  onChange={inputPwdChange}  />
                <br/><br/>
                <input type="button"  value="Login"  onClick={loginClick}  />
                <hr/>
                <p>{result}</p>
            </fieldset>

        </>
    );
}

export default Login;