import React from 'react';
import styles from './styles.css';
import Container from './Container.js';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     
    };
  }
  
  render() {
    return (
      <div> 
        <Container/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    placeholder1: 'placeholder1',
    placeholder2: 'placeholder2'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch(setData(data));
    },
    setData1: (data) => {
      dispatch(setData1(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



















