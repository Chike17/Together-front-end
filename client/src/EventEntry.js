import React from 'react';
import styles from './styles.css';  
class EventEntry extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
       }
    }
    render() {
    return (
         <div className = {styles.eventEntry}>
            <div className = {styles.dateTitleRow}>
                <h5 className = {styles.dateEntry}>
                   Some Date
                </h5>

                <div className = {styles.titleEntry}>
                  Some Title
                </div>
    
            </div>
            <div className = {styles.locationEntry}> 
                Some Location     
            </div>

            <div className = {styles.startEndTime}> 

                <div className = {styles.startEntry}>
                  some start time          
                </div>

                <div className = {styles.endEntry}>
                  some end time
                </div>
        
            </div>
            <h2 className = {styles.entryImage}> Some Image </h2>
         </div>
    );
    }
}

module.exports = EventEntry; 