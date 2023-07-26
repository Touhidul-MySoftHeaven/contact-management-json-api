import React from "react";
import user from "../images/user.png";
import { useLocation,Link,useNavigate } from 'react-router-dom';

const ContactDetails = () => {

  const { state } = useLocation();
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  const { name, email } =state.contact;
   
  return (
    <div className="item" style={{ color: "red", marginTop: "70px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        
          <div className="header">{name}</div>
          <div>{email}</div>
       
          <button onClick={goBack} className="ui button blue right">Back</button>	
      </div>
    </div>
  );
};
export default ContactDetails;
