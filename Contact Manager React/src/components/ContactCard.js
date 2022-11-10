import React from 'react'
import {Link} from'react-router-dom';
import icon from '../images/icon.jpg';

const ContactCard=(props)=>{
    const {id,name,email} = props.contact;
    return (
        <div className='item'>
            <img className='ui avatar image' src={icon} alt='icon'/>
                <div className='content'>
                    <Link to={`/contact/${id}`} state={{contact: props.contact}}>
                    <div className='header'>{name} </div>
                    <div>{email}</div>
                    </Link>
                </div>
                    <i  className='trash alternate outline icon right floated' 
                        style={{color:"red", fontSize:"20px", marginLeft:"10px", marginTop: "7px"}} 
                        onClick={()=> props.clickHandler(id)}
                       />
                    <Link to={`/edit`} state={{contact: props.contact}}>
                    <i  className='edit alternate outline icon right floated' 
                        style={{color:"blue",marginTop: "7px", fontSize:"20px"}} 
                       />
                    </Link>
            </div>
    )
}

export default ContactCard
