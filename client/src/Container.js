import React from 'react';
import styles from './styles.css';
import EditEvent from './EditEvent';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
        <EditEvent />
      </div>
    );
  }
}

module.exports = Container;








