import React from 'react';
import styles from './styles.css';  
import axios from 'axios';
class EventReadView extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         event: {}
       }
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        let context = this;
        axios.get(`http://localhost:3000/event/${this.props.match.params.id}`)
        .then(function (response) {
            let data = response.data
            let event = context.state.event;
            event.title =  data.title;
            event.location = data.location;
            event.startTime = data.startTime;
            event.endTime = data.endTime;
            event.day = data.day;
            event.description = data.description;
            context.setState({event: event});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div className={styles.eventReadContainer}>
                <div className = {styles.singleDateTitle}> 
                    <h2 className = {styles.singleDate}> {this.state.event.day} </h2>
                    <h3 className = {styles.singleTitle}> {this.state.event.title} </h3>
                </div>

                <div classname = {styles.singleLocation}> {this.state.event.location}</div>

                <h1 className = {styles.singleImage}> Some Image </h1>

                <p className = {styles.singleDescription}> 
                    {this.state.event.description}
                </p>
                                
                <div className = {styles.singleStartEnd}>
                    <div className = {styles.singleStart}>  {this.state.event.startTime}  </div>
                    <div className = {styles.singleEnd}>  {this.state.event.endTime}  </div>
                </div>  
            </div>
            
        );
    }
}

module.exports = EventReadView;