import React from "react";

function  Skill()
{

    let  skills = ["HTML5", "CSS3", "Angular", "ReactJS", "Node JS", "Express JS", "Bootstrap"];  

    return (
        <React.Fragment>

            <ul>
                {skills.map((item)=>{
                  return  <li>{item}</li>
                })}
            </ul>   

        </React.Fragment>
    );
}

export default Skill;