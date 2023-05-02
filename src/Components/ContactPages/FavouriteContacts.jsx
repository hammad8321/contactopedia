import React from "react";
import Contact from "./Contact";

const FavouriteContacts = (props) => {
  return (
    <div>
      {/* <div>
        <button className='btn btn-secondary form-control'>Favourite Contacts</button>
        
    </div> */}
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index}></Contact>
      ))}
    </div>
  );
};

export default FavouriteContacts;
