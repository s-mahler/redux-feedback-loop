import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    // Each of the feedback form components is very similar, 
    // but just different enough to make further componentizing invalid

    // Comments made here also apply to Success.js and Understanding.js

    state = {
        feedback: 0
    }
    
   
    handleSubmit = () => {
         // Input validation to make sure the entered value is between 1 and 5
        if (this.state.feedback < 1 || this.state.feedback > 5) {
            alert('Enter a value between 1 and 5');
        } else{
            // Dispatch a payload to the reducer in index.js, triggering the switch statement
            this.props.dispatch({type: 'ADD_FEELINGS', payload: this.state.feedback})
            this.props.history.push('/understanding');
        }
    }

    handleChange = (event) => {
        this.setState({
          feedback: event.target.value
        })
      }
    
    render () {
        return (
            <div className="form">
                <p>How are you feeling today?</p>
                <input onChange={this.handleChange} type="number" placeholder="1 - 5"/>
                <button onClick={this.handleSubmit}>NEXT</button>
            </div>
        )
    }
}

export default connect()(Feeling);