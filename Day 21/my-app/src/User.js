function  User()
{
    let  uname =  "Scott";
    let  email =  "scott@gmail.com";
    let  age =  25;

    return (
        <>
            <p>
                User Name  :  {uname}  <br/>
                User Email  :  {email}  <br/>
                User Age  :  {age}  <br/>
            </p>
        </>
    );
}

export default User;