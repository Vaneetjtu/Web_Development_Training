import Emp from "./Emp";
import Skill from "./Skill";
import Students from "./Students";
import User from "./User";
import './App.css';

function App()
{ 

  return (
    <div>
      <h3>Developing Web Application using React</h3>
      <hr/>
      <Students course="Angular"/>
      <Students course="React JS"/>
      <Students course="HTML"/>
      <Students/>
       {/* <User />
       <hr/>
       <Skill />    
       <hr/>
       <Emp /> */}
    </div>
  );
}

export default App;