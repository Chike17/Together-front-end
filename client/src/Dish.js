
import React from 'react';
import styles from './styles.css';  
class Dish extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         dish: ''
       }
       this.handleDish = this.handleDish.bind(this);
    }
    handleDish(e) {
        this.setState({dish:e.target.value});
    }
    render() {
        return (
            <input className = {styles.addItemRow}
            type="text"
            placeholder = "Dish to bring" 
            onChange = {this.props.addDish}
            defaultValue = {this.props.val}/>
        );
    }
}

module.exports = Dish; 