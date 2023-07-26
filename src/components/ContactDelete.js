import React from "react";
import user from "../images/user.png";
import { useLocation,Link,useNavigate } from 'react-router-dom';

const ContactDelete= (props) => {

  const { state } = useLocation();
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  const confirmDelete =() => {
    if(window.confirm("Delete the item?"))
    {
      props.deleteContactHandler(state.contact.id)
      goBack();
    }
  }
  const { name, email } =state.contact;
 
  return (
    <div className="item" style={{ color: "red", marginTop: "70px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        
          <div className="header">{name}</div>
          <div>{email}</div>
       
          <button onClick={goBack} className="ui button blue right">Back</button>
          <button onClick={confirmDelete} className="">Delete</button>		
      </div>
    </div>
  );
};
export default ContactDelete;
