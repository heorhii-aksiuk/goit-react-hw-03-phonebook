import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

class Form extends Component {
  static propTypes = {
    onSubmitContact: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    const newContact = { id, name, number };
    this.props.onSubmitContact(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={s.wrapper}>
          <label className={s.label} htmlFor="name">
            Name:
          </label>
          <input
            className={s.input}
            value={name}
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            required
          />
        </div>
        <div className={s.wrapper}>
          <label className={s.label} htmlFor="number">
            Phone:
          </label>
          <input
            className={s.input}
            value={number}
            onChange={this.handleChange}
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
