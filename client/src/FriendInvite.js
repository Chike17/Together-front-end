import React from 'react';
import styles from './styles.css';

class FriendInvite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        // add delete dish button
      return (
        <div>
            <div className = {styles.friendContainer}> 
                <div> {this.props.number} </div>
                <input className = {styles.friendsRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add A Friend's Name" />

                <input className = {styles.friendsRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add A Friend's Email" />
                 <button >
                  Add a Dish
                </button> 
                <button >
                  Delete Friend
                </button>       
                </div>
                <ul>
                <input className = {styles.addItemRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Dish to bring" />
                <input className = {styles.addItemRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Dish to bring" />
                </ul>
        </div>
      );
    }
  }

module.exports = FriendInvite;
