import React from "react";
import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ border: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50"> Other Favorites </div>

      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            favoriteClick={props.favoriteClick}
          ></Contact>
        ))}
      </div>
    </div>
  );
};

export default GeneralContacts;
