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

class MakeNewEvent extends React.Component {
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
        events: [],
        event: {title:"", location: ""},
        image: ""
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
    //     let context = this;
    // //     this.setState({friendFields: [...this.state.friendFields, 
    // //     <FriendInvite friendNum = {++this.state.friendNum} addEvent = {this.addEvent }/>
    // // ]}, ()=> {
    // //     console.log(this.props.match.params.id);
    //     axios.get(`http://localhost:3000/event/${this.props.match.params.id}`)
    //     .then(function (response) {
    //         let data = response.data;
    //         console.log('///&&&&&&&&&&&&&&////')
    //         console.log(data);
    //         let event = context.state.event;
    //         event.title =  data.title;
    //         event.location = data.location;
    //         event.startTime = data.startTime;
    //         event.endTime = data.endTime;
    //         event.day = data.day;
    //         event.description = data.description;
    //         let myGuests = [];
    //         context.setState({event: event}, () => {
    //             for (let i = 0; i < data.guests.length; i++) {
    //                 let guest = data.guests[i];
    //                 console.log(guest.dishes, "999999999");
    //                 myGuests.push(<FriendInvite 
    //                                 friendNum = {++context.state.friendNum}  
    //                                 email = {guest.email}
    //                                 name = {guest.firstName}
    //                                 dishes = {guest.dishes}
    //                                 />);
    //             }
    //             context.setState({friendFields: [...context.state.friendFields, ...myGuests]});
    //         });
    //     }, () =>{
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // // });
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
            endTime: this.state.endTime,
            startTime: this.state.startTime,
            day: this.state.day, 
            location: this.state.location,
            image: this.state.image,
            host: 1,
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
        axios.post(`http://localhost:3000/event/${this.props.match.params.id}`, event)
          .then(function (response) {
            console.log(response.data, "0000000000000000000000");
          })
          .catch(function (error) {
            console.log(error);
          });
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
        // console.log(this.state.event.description, '//////')
        // console.log(this.state.event.description, '/////')
        // console.log(this.state.event.description, '//////')
        // console.log(this.state.event.description, '//////')
        // console.log(this.state.event.description, '//////')
        let description = this.state.event.description;
        let startTime = new Date(this.state.event.startTime)
        let endTime = new Date(this.state.event.endTime)
        console.log(this.state.friendFields, '***********');
    return (
    
        <div className = {styles.editorContainer}>
             <input className = {styles.titleRow}
            type="text" defaultValue= {this.state.event.title}
            onChange={this.handleTitle}  
            placeholder = "Title" />

            <input className = {styles.locationRow}
            type="text" defaultValue= {this.state.event.location}
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
                value = {this.state.startTime}
                />
                <TimeInput
                label = "end Time"
                className= {styles.timeInputEnd}
                onChange = {this.handleEndChange}
                value = {this.state.endTime}
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
                        {this.setState({image: BASE_URL + url})}
                        <img src={BASE_URL + url} className= {styles.eventImage}
                        alt="not available"/><br/>
                        </div>
                        ))
                        }
                    </div>
                </div>
                <input
                    className = {styles.descriptionRow}
                    type="text" 
                    onChange={this.handleDescription} 
                    placeholder = {"Description"} defaultValue = {description}/>
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

module.exports =  withStyles(styles)(MakeNewEvent);





