import React from 'react';
import styles from './styles.css';  
class EventReadView extends React.Component {
    constructor(props) {
       super(props);
       this.state = {}
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        console.log(this.props.match.params.id);
        console.log(this.props.match.params.id);
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div className={styles.eventReadContainer}>
                <div className = {styles.singleDateTitle}> 
                    <h2 className = {styles.singleDate}> Some Date </h2>
                    <h3 className = {styles.singleTitle}> Some Title </h3>
                </div>

                <div classname = {styles.singleLocation}> Some location </div>

                <h1 className = {styles.singleImage}> Some Image </h1>

                <p className = {styles.singleDescription}> 
                    Some Description
                    Some Description
                    Some Description
                    Some Description
                    Some Description
                    Some Description
                </p>
                                
                <div className = {styles.singleStartEnd}>
                    <div className = {styles.singleStart}>  Some Start Time  </div>
                    <div className = {styles.singleEnd}>  Some End Time  </div>
                </div>  
            </div>
            
        );
    }
}

module.exports = EventReadView;