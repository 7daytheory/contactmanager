import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  //Getting call from Contact.js from buttons onClick
  deleteContact = id => {
    const { contacts } = this.state;

    //Filters out the user clicked on the app b/c no database
    const newContacts = contacts.filter(contact => contact.id !== id);

    // Sets new state of newContacts (looks like it removes an item)
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span class="text-danger">Contact </span>
                List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
