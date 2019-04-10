import React from 'react';
import styles from './styles.css';
import FriendInvite from './FriendInvite';
import  EventReadView from './EventReadView';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import MomentUtils from '@date-io/moment';
import LuxonUtils from '@date-io/luxon';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import TimeInput from 'material-ui-time-picker'
import axios from 'axios';
const BASE_URL = 'http://localhost:8888/';

class EditEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: '9:00 am',
        endTIme: '5:00  pm',
        day: new Date(),
        month: 'some month ',
        title:  'some title', 
        location: 'some location', 
        host: 'some host',
        guest: ['guest 1', 'guest 2', 'guest 3'],
        value: "some data",
        friendFields: [],
        friendNum: 0,
        images: [],
        imageUrls: [],
        message: '',
        title:'',
        location: '',
        startTime: new Date(),
        endTime: new Date(),
        description: 'description',
        guests: {},
        events: []
      };

      this.selectImages = this.selectImages.bind(this);
      this.uploadImages = this.uploadImages.bind(this);
      this.dummyFunc = this.dummyFunc.bind(this);
      this.addFriend = this.addFriend.bind(this);
      this.deleteFriendField = this.deleteFriendField.bind(this);
      this.submitEvent = this.submitEvent.bind(this);
      this.addEvent = this.addEvent.bind(this);
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
      this.handleDayChange = this.handleDayChange.bind(this);
      this.handleTitle= this.handleTitle.bind(this);
      this.handleLocation= this.handleLocation.bind(this);
      this.handleDescription= this.handleDescription.bind(this);
    }
    componentDidMount () {
        this.setState({friendFields: [...this.state.friendFields, 
        <FriendInvite friendNum = {++this.state.friendNum} addEvent = {this.addEvent }/>
    ]});
    }
    selectImages(event) {
        let images = []
        for (let i = 0; i < event.target.files.length; i++) {
        images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        let message = `${images.length} valid image(s) selected`
        this.setState({ images, message });
    }
    uploadImages() {
        const uploaders = this.state.images.map(image => {
        const data = new FormData();
        data.append("image", image, image.name);
        // Make an AJAX upload request using Axios
        return axios.post(BASE_URL + 'upload', data)
        .then(response => {
        this.setState({
            imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
        });
        })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
        console.log('done');
        }).catch(err => alert(err.message));
    } 
    dummyFunc(e) {
        console.log(e.target.value);
    }
    addGuest (guest, dishes){
        this.guests[guest] = dishes;
    }
    addEvent(event) {
        this.events.push(event);
    }
    addFriend() {    
        this.state.friendNum++;    
        this.setState({friendFields: [...this.state.friendFields, <FriendInvite 
                                                                    friendNum = {this.state.friendNum}
                                                                    submitEvent = {this.submitEvent}
                                                                    addEvent = {this.addEvent}/>]});
    }
    deleteFriendField(){
        this.state.friendNum--;
        this.state.friendFields.splice(this.state.friendFields.length -1, 1);
        this.setState({friendFields: [...this.state.friendFields]}); 
    }
    submitEvent () {
        let event = {
            description: this.state.description,
            title: this.state.title,
            endTime: this.state.endTime.toLocaleTimeString(),
            startTime: this.state.startTime.toLocaleTimeString(),
            day: this.state.day.toLocaleDateString(), 
            location: this.state.location,
            host: null,
            guests: []
        }
        $('.friend').each(function(index, friend){
            let inputs = $(friend).find(':input');
            let guest = {
                dishes: []
            };
            inputs.each((index, input)=>{
                if (index === 0){
                    guest.firstName = input.value
                }  else if (index === 1) {
                    guest.email = input.value;
                } else {
                    if  (input.value.length) {
                        guest.dishes.push(input.value);
                    }
                }
            });
            event.guests.push(guest);
          });
        console.log(event);
    }
    handleStartChange(time) {
        let context = this;
        this.setState({startTime: time}, () => {
            console.log(context.state.startTime);
        });
    }
    handleEndChange (time) {
        let context = this;
        this.setState({endTime:time}, () => {
            console.log(context.state.endTime);
        });
    }
    handleDayChange (day) {
        let context = this;
        console.log(day);
        this.setState({day:day}, () => {
            console.log(context.state.day);
        });
    }
    addEvent (friend) {
        // this.state.events.push({
        //                         name: friend.name,
        //                         email: friend.email,
        //                         dishes: friend.bringDishes,
        //                         startTime: this.state.startTime,
        //                         endTime: this.state.endTime, 
        //                         day: this.state.day
        //                     });
        let context = this;
        this.state.events = [];
        // this.setState({
        //     startTime: 
        // });
        this.setState({events: [...this.state.events, {name: friend.name,
                                                       email: friend.email,
                                                       dishes: friend.bringDishes,
                                                       startTime: this.state.startTime,
                                                       endTime: this.state.endTime,
                                                       day: this.state.day,
                                                       description: this.state.description
                                            
                                                       }]}, () => {
                                                        console.log(this.state.events, '000000000000000');
                                                       });  
    }
    submit () {
       console.log(this.state.events, '***********');
    }
    handleDescription(e) {
        let context = this;
        this.setState({description:e.target.value}, () => {
            console.log(context.state.description); 
        });
    }
    handleTitle(e) {
        let context = this;
        this.setState({title:e.target.value}, () => {
            console.log(context.state.title); 
        });
    }
    handleLocation(e) {
        let context = this;
        this.setState({location:e.target.value}, () => {
            console.log(context.state.location); 
        });
    }
    event() {

    }
    render() {
    return (
    
        <div className = {styles.editorContainer}>
             <input className = {styles.titleRow}
            type="text" defaultValue= {""}
            onChange={this.handleTitle}  
            placeholder = "Title" />

            <input className = {styles.locationRow}
            type="text" defaultValue= {""}
            onChange={this.handleLocation}  
            placeholder = "Location" />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                margin="normal"
                label=""
                value={this.state.day}
                onChange={this.handleDayChange}
                className = {styles.dayInput}
                />
            </MuiPickersUtilsProvider>
             
            <div className = {styles.timeContainer}> 
                <TimeInput
                label = "start time"
                className= {styles.timeInputStart}
                onChange= {this.handleStartChange}
                />
                <TimeInput
                label = "end Time"
                className= {styles.timeInputEnd}
                onChange = {this.handleEndChange}
                />
            </div>
                <div className = {styles.imageUploadContainer}>
                    <div className="">
                        <h3>Upload an Image</h3>
                        <div className="">
                        <input className="" type="file" 
                        onChange={this.selectImages} multiple/>
                        </div>
                        <p className="">{this.state.message}</p>
                        <div className="">
                        <button className="btn btn-primary" value="Submit" 
                        onClick={this.uploadImages}>Submit</button>
                        </div>
                        </div>
                        <div className="r">
                        { 
                        this.state.imageUrls.map((url, i) => (
                        <div className="" key={i}>
                        {console.log(url)}
                        <img src={BASE_URL + url} className= {styles.eventImage}
                        alt="not available"/><br/>
                        </div>
                        ))
                        }
                    </div>
                </div>
            <form >
                <textarea className = {styles.descriptionRow}
                type="text" defaultValue= {""}
                onChange={this.handleDescription} 
                placeholder = "Add a Description" />
            </form>
             <ul className = {styles.addDeleteFriend}>
                <button className = {styles.addFriend} onClick = {this.addFriend} className={styles.addFriend} > Add Guest</button> 
                <button className = {styles.deleteFriend}  onClick = {this.deleteFriendField} className={styles.addFriend} > Delete Guest </button>
            </ul> 

            {this.state.friendFields}

            <button className={styles.submitButton} onClick = {this.submitEvent}>Submit Event</button>
             
        </div>
      );
    }
  }

module.exports =  withStyles(styles)(EditEvent);



