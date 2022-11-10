import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import axios from 'axios';


const App=()=>{

  const URL="http://localhost:3000/"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    const response = await axios.post(URL+"contacts", contact)
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact)=>{
    const response = await axios.put(URL+`contacts/${contact.id}`, contact);
    const {id} = response.data;
    setContacts(contacts.map(contact =>{
      return contact.id === id ? {...response.data} : contact;
    }))
  }

  const removeContactHandler = async (id) => {
    await axios.delete(URL+`contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    
    setContacts(newContactList);
  };
  
  useEffect(() => {
    const getAllContacts = async () => {
    const response = await axios.get(URL+"contacts");
      const allContacts = response.data
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
}, [])

  
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
        <Route path="/" 
        element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
        />
        <Route path="/add" 
        element={<AddContact addContactHandler={addContactHandler}/>}
        />
        <Route path="/edit" 
        element={<EditContact updateContactHandler={updateContactHandler}/>}
        />
        <Route path="/contact/:id" element={<ContactDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
