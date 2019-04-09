import React from 'react';
import styles from './styles.css';
import FriendInvite from './FriendInvite';
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


// import ImageUploader from  './ImageUploader';

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
        value: "some data",
        friendFields: [],
        friendNum: 0,
        images: [],
        imageUrls: [],
        message: ''
      };
      this.selectImages = this.selectImages.bind(this);
      this.uploadImages = this.uploadImages.bind(this);
      this.dummyFunc = this.dummyFunc.bind(this);
      this.addFriend = this.addFriend.bind(this);
      this.deleteFriendField = this.deleteFriendField.bind(this);
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
    addFriend() {    
        this.state.friendNum++;    
        this.setState({friendFields: [...this.state.friendFields, <FriendInvite friendNum = {this.state.friendNum}/>]});
    }
    deleteFriendField(){    
        this.state.friendFields.splice(this.state.friendFields.length -1, 1);
        this.setState({friendFields: [...this.state.friendFields]}); 
    }
    render() {
    return (
    
        <div className={styles.editorContainer}>
        
            <input className = {styles.titleRow}
            type="text" defaultValue= {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "Title" />

            <input className = {styles.locationRow}
            type="text" defaultValue= {this.state.value}
            onChange={this.dummyFunc}  
            placeholder = "Location" />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                margin="normal"
                label=""
                value={'2014-08-18T21:11:54'}
                onChange={this.handleDateChange}
                className = {styles.dayInput}
                />
            </MuiPickersUtilsProvider>
             
            <div className = {styles.timeContainer}> 
                <TimeInput
                label = "start time"
                className= {styles.timeInputStart}
                />
                <TimeInput
                label = "end Time"
                className= {styles.timeInputEnd}
                />
            </div>
            <br/>

                <div className="">
                    <h1>Image Uploader</h1><hr/>
                    <div className="">
                    <input className="form-control " type="file" 
                    onChange={this.selectImages} multiple/>
                    </div>
                    <p className="text-info">{this.state.message}</p>
                    <br/><br/><br/>
                    <div className="">
                    <button className="btn btn-primary" value="Submit" 
                    onClick={this.uploadImages}>Submit</button>
                    </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><br/>
                    <div className="r">
                    { 
                    this.state.imageUrls.map((url, i) => (
                    <div className="" key={i}>
                    {console.log(url)}
                    <img src={BASE_URL + url} className="img-rounded img-responsive"
                    alt="not available"/><br/>
                    </div>
                    ))
                    }
                </div>

            <form >
                <textarea className = {styles.descriptionRow}
                type="text" defaultValue= {this.state.value}
                onChange={this.dummyFunc}  
                placeholder = "Add a Description" />
            </form>
             <ul className = {styles.addDeleteFriend}>
                <button className = {styles.addFriend} onClick = {this.addFriend} className={styles.addFriend} > Add Guest</button> 
                <button className = {styles.deleteFriend}  onClick = {this.deleteFriendField} className={styles.addFriend} > Delete Guest </button>
            </ul> 

            {this.state.friendFields}
        </div>
      );
    }
  }

module.exports =  withStyles(styles)(EditEvent);









