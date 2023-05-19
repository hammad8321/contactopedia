import React, { Component } from "react";
import Header from "../../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../../Layout/Footer";

export class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constactList: [
        {
          id: 1,
          name: "NAME A",
          phone: "0123-333",
          email: "namea@mail.com",
          isFaourate: false,
        },
        {
          id: 2,
          name: "NAME B",
          phone: "0222-333",
          email: "nameb@mail.com",
          isFaourate: false,
        },
        {
          id: 1,
          name: "NAME C",
          phone: "03332-333",
          email: "namec@mail.com",
          isFaourate: true,
        },
      ],
    };
  }

  handleAddContact=(newContact)=>{

    newContact= 
alert("help");

  }


  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>

            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact  handleAddContact={this.handleAddContact}/>
              </div>
            </div>

            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  contacts={this.state.constactList.filter(
                    (u) => u.isFaourate === true
                  )}
                />
              </div>
            </div>

            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.constactList.filter(
                    (a) => a.isFaourate === false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
