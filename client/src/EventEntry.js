import React from 'react';
import styles from './styles.css';  
import {NavLink} from 'react-router-dom';

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
                   {this.props.day}
                </h5>

                <div className = {styles.titleEntry}>
                  {this.props.title}
                </div>
    
            </div>
            <div className = {styles.locationEntry}> 
                {this.props.location}    
            </div>

            <div className = {styles.startEndTime}> 

                <div className = {styles.startEntry}>
                    {this.props.startTime}         
                </div>

                <div className = {styles.endEntry}>
                    {this.props.endTime}
                </div>
            </div>
            <h2 className = {styles.entryImage}> {this.props.image} </h2>
             <div className={styles.readEditEntry}>
                <NavLink to={`/readevent/${this.props.id}`}>
                    <button className= {styles.readEntry}> Read Event </button>
                </NavLink>
                <NavLink to={`/editevent/${this.props.id}`}>
                    <button className= {styles.readEntry}> Edit Event </button>
                </NavLink>
             </div>
         </div>
    );
    }
}

module.exports = EventEntry; 