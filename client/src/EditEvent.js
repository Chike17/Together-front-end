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
import TimeInput from 'material-ui-time-picker';
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
        friendNum: 0
      };
      this.dummyFunc = this.dummyFunc.bind(this);
      this.addFriend = this.addFriend.bind(this);
      this.deleteFriendField = this.deleteFriendField.bind(this);
    }
    dummyFunc (e) {
        console.log(e.target.value);
    }
    addFriend () {    
        this.state.friendNum++;    
        this.setState({friendFields: [...this.state.friendFields, <FriendInvite 
                                                                        number ={this.state.friendNum} />]});
    }
    deleteFriendField (friendIndex) {
       this.state.friendFields.splice(friendIndex, 1); 
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

            <form >
                <input className = {styles.imageRow}
                type="text" defaultValue= {this.state.value}
                onChange={this.dummyFunc}  
                placeholder = "Add Event Image" />
            </form>

            <form >
                <textarea className = {styles.descriptionRow}
                type="text" defaultValue= {this.state.value}
                onChange={this.dummyFunc}  
                placeholder = "Add a Description" />
            </form>
            
            <button onClick = {this.addFriend} className={styles.addFriend} > Add A Friend</button> 

            {this.state.friendFields}
        </div>
      );
    }
  }

module.exports =  withStyles(styles)(EditEvent);