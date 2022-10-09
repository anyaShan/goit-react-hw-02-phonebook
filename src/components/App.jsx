import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formAddContactList = data => {
    const { name, number } = data;
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formAddContactList} />
        </Section>
        <Section title="Contacts">
          {/* <Filter /> */}
          <ContactList contacts={contacts} deleteContact={this.deleteContact} />
        </Section>
      </Container>
    );
  }
}
