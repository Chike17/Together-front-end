import React from 'react';
import styles from './styles.css';  
import axios from 'axios';
class EventReadView extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         event: {},
         guests: []
       }
       console.log(this.props.match.params.id);
        let context = this;
        axios.get(`http://localhost:3000/event/${this.props.match.params.id}`)
        .then(function (response) {
            let data = response.data
            let event = context.state.event;
            event.title =  data.title;
            event.location = data.location;
            event.startTime = new Date(data.startTime).toLocaleTimeString(),
            event.endTime = new Date(data.endTime).toLocaleTimeString(),
            event.day = new Date(data.endTime).toLocaleDateString(),
            event.description = data.description;
            event.image = data.image;
            event.guests = data.guests;
            let invites = [];
            for (let i = 0; i < event.guests.length; i++) {
                let dinnerGuest = event.guests[i];
                console.log(dinnerGuest);
                // context.state.guests.push(<h4 className = {styles.dinnerGuest}> {`${i + 1}  ${dinnerGuest.firstName}`} </h4>);
                invites.push(<h4 className = {styles.dinnerGuest}> {`${i + 1}  ${dinnerGuest.firstName}`} </h4>);
                let dishes = dinnerGuest.dishes;
                console.log(dishes);
                for(let j = 0; j <dishes.length; j++) {
                    // context.state.guests.push(
                    //     <p className = {styles.dinnerGuestDish}> {dishes[j]}</p>      
                    // );
                    invites.push(<p className = {styles.dinnerGuestDish}> {dishes[j]}</p>);
                }
            }
            context.setState({event: event});
            context.setState({guests: invites});


        })
        
        .catch(function (error) {
            console.log(error);
        }); 
    }
    componentDidMount() {
        
    }
    render() {
        console.log(this.state.guests, '9999999');
        return (
            <div className={styles.eventReadContainer}>
                <div className = {styles.singleDateTitle}> 
                    <h2 className = {styles.singleDate}> {this.state.event.day} </h2>
                    <h3 className = {styles.singleTitle}> {this.state.event.title} </h3>
                </div>

                <div classname = {styles.singleLocation}> {this.state.event.location}</div>

                <h1 className = {styles.singleImage}> {this.state.event.image} </h1>
                <p className = {styles.singleDescription}> 
                    {this.state.event.description}
                </p>
                                
                <div className = {styles.singleStartEnd}>
                    <div className = {styles.singleStart}>  {this.state.event.startTime}  </div>
                    <div className = {styles.singleEnd}>  {this.state.event.endTime}  </div>
                </div> 
                {this.state.guests}
            </div>
            
        );
    }
}

module.exports = EventReadView;