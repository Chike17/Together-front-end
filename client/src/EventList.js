import React from 'react';
import styles from './styles.css'; 
import EventEntry from './EventEntry';
 
class EventList extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
       }
    }
    render() {
        return (
            <div className ={styles.eventListContainer}>
                <EventEntry />
                <EventEntry />
                <EventEntry />
                <EventEntry />
           </div>
        );
    }
}

module.exports = EventList; 