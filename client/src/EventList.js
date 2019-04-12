import React from 'react';
import styles from './styles.css'; 
import EventEntry from './EventEntry';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
 
class EventList extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           events:[],
           event: {}
       }
    }
    componentDidMount() {
        let context = this;
        axios.get('http://localhost:3000/event')
        .then(function (response) {
        response.data = response.data.reverse();
        console.log(response.data) 
        response.data.forEach((data, index)=> {
            let event = context.state.event;
            event.title =  data.title;
            event.location = data.location;
            event.startTime = new Date(data.startTime)
            event.endTime = new Date(data.endTime)
            event.day = new Date(data.endTime)
            event.description = data.description
            event.guests = data.guests;
            event.image = data.image;
            event.id = data._id;
            console.log(event);

            context.state.events.push( <EventEntry 
                                        day = {new Date(event.day).toLocaleDateString()}
                                        title =  {event.title}
                                        location = {event.location}
                                        startTime = {new Date(event.startTime).toLocaleTimeString()}
                                        endTime = {new Date(event.endTime).toLocaleTimeString()}
                                        id = {event.id}
                                        image = {event.image}/>);
        });
        context.setState({events: context.state.events});
        })
        .catch(function (error) {
        // console.log(error);
        });

    }
    render() {        
        return (
            <div className ={styles.eventListContainer}>
            {/* <NavLink to="/createevent">
                <button> Create event </button> 
            </NavLink> */}
                {this.state.events}
           </div>
        );
    }
}

module.exports = EventList; 