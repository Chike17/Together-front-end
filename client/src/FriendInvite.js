import React from 'react';
import Dish from './Dish';
import styles from './styles.css';

class FriendInvite extends React.Component {
    constructor(props) {
      super(props);

      this.addDishEntry = this.addDishEntry.bind(this);
      this.deletDishEntry = this.deletDishEntry.bind(this);
      // this.addDish = this.addDish.bind(this);
      this.addFriendName = this.addFriendName.bind(this);
      this.addFriendEmail = this.addFriendEmail.bind(this);

      this.state = {
         dishNum: 1,
         dishes: [],
         dishId: 1,
         name:'',
         email: '', 
         friend: {},
         bringDishes: this.props.dishes
      };;
      if (this.props.dishes){
        for (let i = 0; i < this.props.dishes.length; i++) {
          this.state.dishes.push(<Dish val = {this.props.dishes[i]}/>);
        }
      }
    }
    componentDidMount() {
        // for (let i = 0; i < this.props.dishes.length; i++) {
        //   this.state.dishes.push(<Dish val = {this.props.dishes[i]}/>);
        // }
    }
    componentWillReceiveProps(nextProps) {
      // for (let i = 0; i < this.nextProps.dishes.length; i++) {
      //   this.state.dishes.push(<Dish val = {this.nextProps.dishes[i]}/>);
      // }
  }
    addFriendName(e) {
        console.log(e.target.value);
        this.setState({name: e.target.value});
    }
    addFriendEmail(e) {
        let context = this;
        this.setState({email: e.target.value}, ()=>{
          console.log(context.state.email);
        });
    }
    handleName(e) {
        let context = this;
        this.setState({name: e.target.value}, () => {
          console.log(context.state.name);
        });
    }
    handleEmail() {

    }
    addDishDB() {
    }
    // addDish(e) {
    //     let context = this;
    //     this.state.bringDishes = [];
    //     this.setState({bringDishes: [...this.state.bringDishes, e.target.value]}, ()=> {
    //       console.log({name: this.state.name, email: this.state.email, dishes: context.state.bringDishes});

    //       // this.props.addEvent({name: this.state.name, email: this.state.email, bringDishes: context.state.bringDishes});
    //     });
    // }
    addDishEntry() { 
        this.setState({dishes: [...this.state.dishes, <Dish addDish/>]}); 
    }
    deletDishEntry (element) { 
         this.state.dishes.splice(this.state.dishes.length -1, 1);
         this.setState({dishes: [...this.state.dishes]}); 
    }
    submitFriend () {
        let name = this.state.name;
        let dishes = this.state.dishes;
        let email = this.state.email;
        this.setState({friend:{name, email, dishes}});
        console.log(this.state.friend)
    }
    render() {
      let dishes = this.state.dishes;
      return (
        <div  className = {'friend'}>
            <div className = {styles.friendContainer}> 
              <div> {this.props.friendNum} </div>
                <input className = {styles.friendsRow}
                type="text"
                onChange={this.addFriendName}
                defaultValue = {this.props.name}
                placeholder = "Add A Friend's Name" />

                <input className = {styles.friendsRow}
                type="text" 
                placeholder = "Add A Friend's Email" 
                onChange = {this.addFriendEmail}
                defaultValue = {this.props.email}
                />
                 <button  onClick = {this.addDishEntry}>
                  Add a Dish
                </button> 

                <button onClick = {this.deletDishEntry}> 
                  Delete a Dish
                </button>
                </div>
                {dishes}
        </div>
      );
    }
  }

module.exports = FriendInvite;


