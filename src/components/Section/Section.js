import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    contact: PropTypes.element,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h2 className={s.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
