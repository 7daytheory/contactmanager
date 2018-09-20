import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Patrick Mahomes',
        email: 'PMahomes@gmail.com',
        phone: '905 483 1383'
      },
      {
        id: 2,
        name: 'Tyreek Hill',
        email: 'THill@gmail.com',
        phone: '905 483 3757'
      },
      {
        id: 3,
        name: 'Kareem Hunt',
        email: 'KHunt@gmail.com',
        phone: '905 483 2738'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
