import React from 'react';
import styles from './styles.css'; 
import EventEntry from './EventEntry';
import axios from 'axios';
 
class EventList extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           events:[]
       }
    }
    componentDidMount() {
        let context = this;
        axios.get('http://localhost:3000/event')
        .then(function (response) {
        console.log(response.data) 
        response.data.forEach((event, index)=> {
            console.log(event);
            context.state.events.push( <EventEntry 
                                        day = {new Date(event.day).toLocaleDateString()}
                                        title =  {event.title}
                                        location = {event.location}
                                        startTime = {new Date(event.startTime).toLocaleTimeString()}
                                        endTime = {new Date(event.endTime).toLocaleTimeString()}
                                        id = {event._id}
                                        image = {'placeholder'}/> );
        });
        context.setState({events: context.state.events});
        })
        .catch(function (error) {
        // console.log(error);
        });

    }
    render() {
        console.log(this.state.events);
        return (
            <div className ={styles.eventListContainer}>
                {/* <EventEntry 
                    date = {'some date'}
                    title =  {'some title'}
                    location = {'some location'}
                    day = {'some day'}
                    startTime = {'some start time'}
                    endTime = {'some end time'}
                    image = {'placeholder'}/> 
                <EventEntry 
                    date = {'some date'}
                    title =  {'some title'}
                    location = {'some location'}
                    day = {'some day'}
                    startTime = {'some start time'}
                    endTime = {'some end time'}
                    image = {'placeholder'}/>  */}
                {this.state.events}
           </div>
        );
    }
}

module.exports = EventList; 