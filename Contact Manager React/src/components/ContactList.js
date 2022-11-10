import React from 'react'
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';

const ContactList=(props)=>{
    
    const deletContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deletContactHandler}/>
        );
    })

    return (
        <div className='main'>
                <br/>
            <h2>Contact List 
                <Link to="/add">
                    <button className='ui primary button right floated'>Add Contact</button>
                </Link>
            </h2>
            <div className='ui celled list'>
                {renderContactList.length >0 ? renderContactList:"No Contacts available"}
            </div>
        </div>
    )
}
export default ContactList
