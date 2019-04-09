import React from 'react';
import Dish from './Dish';
import styles from './styles.css';

class FriendInvite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         dishNum: 1,
         dishes: [<Dish deleteDish={this.deleteDish} />],
         dishId: 1
      };
      this.addDish = this.addDish.bind(this);
      this.deleteDish = this.deleteDish.bind(this);
    }
    addDish() { 
        this.setState({dishes: [...this.state.dishes, <Dish deleteDish={this.deleteDish}  />]}); 
    }
    deleteDish (element) { 
         console.log('delete');
         this.state.dishes.splice(this.state.dishes.length -1, 1);
         this.setState({dishes: [...this.state.dishes]}); 
    }
    render() {
      let dishes = this.state.dishes;
      return (
        <div>
            <div className = {styles.friendContainer}> 
                <div> {this.props.friendNum} </div>
                <input className = {styles.friendsRow}
                type="text"
                onChange={this.dummyFunc}  
                placeholder = "Add A Friend's Name" />

                <input className = {styles.friendsRow}
                type="text" 
                placeholder = "Add A Friend's Email" />
                 <button  onClick = {this.addDish}>
                  Add a Dish
                </button> 
                <button onClick = {this.deleteDish}> 
                  Delete a Dish
                </button>      
                </div>
                <ul>
                  {dishes}
                </ul>
        </div>
      );
    }
  }

module.exports = FriendInvite;
