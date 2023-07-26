import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";


const ContactList = (props) => {
  const delteContactHandler = (id) => {
    props.deleteContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        delteContactHandler={delteContactHandler}
      />
    );
  });
  return (
    <div style={{ color: "red", marginTop: "70px" }}>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
