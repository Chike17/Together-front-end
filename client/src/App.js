import React from 'react';
import styles from './styles.css';
import Container from './Container.js';
import { connect } from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import EventList from "./EventList";
import EditEvent from "./EditEvent"; 
import EventReadView from "./EventReadView"; 
import MakeNewEvent from "./MakeNewEvent";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     
    };
  }
  
  render() {
    return (
      <div> 
        <HashRouter>
          <Switch>
            <Route path ="/" component={EventList} exact/>
            <Route path="/editevent/:id" component={EditEvent} />
            <Route path="/readevent/:id" component={EventReadView}/>
            <Route path="/createevent" component={MakeNewEvent}/>
          </Switch>
        </HashRouter>
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








