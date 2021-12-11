import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={s.input}
          id="filter"
          value={value}
          onChange={onChange}
        ></input>
      </div>
    );
  }
}

export default Filter;
