import { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleFormChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Rosie Simpson"
            id={this.nameInputId}
            onChange={this.handleFormChange}
          />
          <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="459-12-56"
            id={this.numberInputId}
            onChange={this.handleFormChange}
          />
        </div>
        <button type="submit" disabled={false}>
          Add contact
        </button>
      </Form>
    );
  }
}

// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   deleteContact: PropTypes.func.isRequired,
// };
