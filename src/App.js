import React, { Component } from 'react';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getNewContact = newContact => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState({ contacts: [newContact, ...contacts] });
    }
  };

  removeContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: [...contacts].filter(contact => contact.id !== id),
    });
  };

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmitContact={this.getNewContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter} />
          <Contacts
            contacts={filteredContacts}
            onRemoveClick={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
