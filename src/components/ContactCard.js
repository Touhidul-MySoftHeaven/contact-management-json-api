import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item" style={{ color: "red", marginTop: "70px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contactdetails/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link to={`/contactdelete/${id}`} state={{ contact: props.contact }}>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
      </Link>
    </div>
  );
};
export default ContactCard;
