import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import ContactDelete from "./components/ContactDelete";
import api from "./api/contact";

function App() {
  // const LOCAL_STORAGE_KEY = "contactList";
  // const previous_contacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  // let parsedJsonContacts;
  // if (previous_contacts) {
  //   parsedJsonContacts = JSON.parse(previous_contacts);
  // } else {
  //   parsedJsonContacts = [];
  // }
  const [contacts, setcontacts] = useState([]);
  const retriveContact = async ()=>{
    const response=await api.get('/contacts');
    return response.data;
  }

  useEffect(()=>{
     const getAllContacts=async ()=>{
      const allContacts=await retriveContact();
      if(allContacts){
        setcontacts(allContacts)
      }
     }
     getAllContacts();
  },[]) 
  

  const addContactHandler = (contact) => {
    setcontacts([...contacts, { id: uuid(), ...contact }]);
  };
  

  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(filteredContacts);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            Component={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/"
            Component={() => (
              <ContactList
                contacts={contacts}
              />
            )}
          />

          <Route
            path="/contactdetails/:id"
            Component={() => <ContactDetails />}
          />
          
          <Route
            path="/contactdelete/:id"
            Component={(props) => <ContactDelete {...props}  deleteContactHandler={deleteContactHandler}/>}
          />

        </Routes>

        {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
