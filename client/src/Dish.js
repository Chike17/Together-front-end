import React from 'react';
import styles from './styles.css';

 const Dish  = (props) => {
    return (
        <input className = {styles.addItemRow}
        type="text"
        placeholder = "Dish to bring" />
    )           
  };

  module.exports = Dish; 


