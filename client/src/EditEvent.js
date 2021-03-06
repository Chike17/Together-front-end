import React from 'react';
import styles from './styles.css';
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
        guest: ['guest 1', 'guest 2', 'guest 3']
      };
      this.dummyFunc = this.dummyFunc.bind(this);
    }
    dummyFunc (e) {
        console.log(e.target.value);
    }
    render() {
      return (
    
        <div className={styles.editorContainer}>
        
            <input className = {styles.titleRow}
            type="text"
            onChange={this.dummyFunc}  
            placeholder = "Title" />

            <input className = {styles.locationRow}
            type="text"
            onChange={this.dummyFunc}  
            placeholder = "Location" />
       
            
            <div className={styles.calendarContainer}> 
            
                <input className = {styles.dateAndTimeRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Start Day" />

                <input className = {styles.dateAndTimeRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Start Time" />

                <input className = {styles.dateAndTimeRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "End Day" />

                <input className = {styles.dateAndTimeRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "End Time" />
            </div>

            <form >
                <input className = {styles.imageRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add Event Image" />
            </form>

            <form >
                <textarea className = {styles.descriptionRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add a Description" />
            </form>

            <div className = {styles.friendContainer}> 
                <input className = {styles.friendsRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add A Friend's Name" />

                <input className = {styles.friendsRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add A Friend's Email" />

                <input className = {styles.friendsRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add Dish" />         
            </div>

                <input className = {styles.addItemRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Dish to bring" />   

        </div>
      );
    }
  }
  
// module.exports = EditEvent;

module.exports =  withStyles(styles)(EditEvent);

// import React from 'react';
// import styles from './styles.css';


// class EditEvent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         startTime: '9:00 am',
//         endTIme: '5:00  pm',
//         startDate: new Date(),
//         title:  'some title', 
//         location: 'some location', 
//         host: 'some host',
//         guest: ['guest 1', 'guest 2', 'guest 3']
//       };
//       this.handleChange = this.handleChange.bind(this);
//       this.dummyFunc = this.dummyFunc.bind(this);
//     }
//     dummyFunc (e) {
//         this.setState({arget: e.target.value});
//         console.log(e.target.value);
//     }
//     render() {
//       return (
//         <div className={styles.editorContainer}>

//             <input className = {styles.titleRow}
//             type="text"
//             onChange={this.dummyFunc}
//             defaultValue = {this.state.target}
//             placeholder = "Title" />

//             <input className = {styles.locationRow}
//             type="text"
//             onChange={this.dummyFunc}
//             defaultValue = {this.state.target}  
//             placeholder = "Location" />
       
//             <div className={styles.calendarContainer}> 

//                 <input className = {styles.dateAndTimeRow}
//                 type="date"
//                 onChange={this.dummyFunc}  
//                 defaultValue = {this.state.target}
//                 placeholder = "Start Day" />

//                 <input className = {styles.dateAndTimeRow}
//                 type="time"
//                 onChange={this.dummyFunc}  
//                 defaultValue = {this.state.target}
//                 placeholder = "Start Time" />

//                 <input className = {styles.dateAndTimeRow}
//                 type="date"
//                 onChange={this.dummyFunc}
//                 defaultValue = {this.state.target}
//                 placeholder = "End Day" />

//                 <input className = {styles.dateAndTimeRow}
//                 type="time"
//                 onChange={this.dummyFunc}  
//                 defaultValue = {this.state.target}
//                 placeholder = "End Time" />
//             </div>

//             <form >
//                 <textarea className = {styles.imageRow}
//                 type="text"
//                 onChange={this.dummyFunc}  
//                 placeholder = "Add Event Image" />
//             </form>

//             <form >
//                 <textarea className = {styles.descriptionRow}
//                 type="text"
//                 onChange={this.dummyFunc}  
//                 defaultValue = {this.state.target}
//                 placeholder = "Add a Description" />
//             </form>

//             <div className = {styles.friendContainer}> 
//                 <input className = {styles.friendsRow}
//                 type="text"
//                 onChange={this.dummyFunc}  
//                 placeholder = "Add A Friend's Name" />

//                 <input className = {styles.friendsRow}
//                 type="text"
//                 onChange={this.dummyFunc}  
//                 placeholder = "Add A Friend's Email" />

//                 <input className = {styles.friendsRow}
//                 type="text"
//                 onChange={this.dummyFunc}  
//                 placeholder = "Add Dish" />         
//             </div>

//                 <input className = {styles.addItemRow}
//                 type="text"
//                 onChange={this.dummyFunc}  
//                 placeholder = "Dish to bring" />
//         </div>
//       );
//     }
//   }