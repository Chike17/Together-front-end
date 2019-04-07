import React from 'react';
import styles from './styles.css';

class EditEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: '9:00 am',
        endTIme: '5:00  pm',
        day: 'some day',
        month: 'some month ',
        title:  'some title', 
        location: 'some location', 
        host: 'some host',
        guest: ['guest 1', 'guest 2', 'guest 3'],
        value: ""
      };
      this.dummyFunc = this.dummyFunc.bind(this);
    }
    dummyFunc (e) {
        console.log(e.target.value);
    }
    render() {
      return (
        <div className={styles.editorContainer}>
        
      
            <input className = {styles.titleRow}
            type="text" value = {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "Title" />



            <input className = {styles.locationRow}
            type="text" value = {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "Location" />
       
            
        <div className={styles.calendarContainer}> 
            
            <input className = {styles.dateAndTimeRow}
            type="text" value = {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "Start Day" />

            <input className = {styles.dateAndTimeRow}
            type="text" value = {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "Start Time" />

            <input className = {styles.dateAndTimeRow}
            type="text" value = {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "End Day" />

            <input className = {styles.dateAndTimeRow}
            type="text" value = {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "End Time" />
            </div>

            <form >
                <input className = {styles.imageRow}
                type="text" value = {this.state.value}
                onChange={this.dummyFunc}  
                placeholder = "Add Event Image" />
            </form>

            <form >
                <textarea className = {styles.descriptionRow}
                type="text" value = {this.state.value}
                onChange={this.dummyFunc}  
                placeholder = "Add a Description" />
            </form>

        </div>
      );
    }
  }
  
module.exports = EditEvent;