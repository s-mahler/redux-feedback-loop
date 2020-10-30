import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0
    }
    
    handleSubmit = () => {
        console.log(this.state.feeling);
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})
    }

    handleChange = (event) => {
        this.setState({
          feeling: event.target.value
        })
      }
    
    render () {
        return (
            <>
            <p>How are you feeling today?</p>
            <input onChange={this.handleChange} type="number" placeholder="1 - 5"/>
            <button onClick={this.handleSubmit}>NEXT</button>
            </>
        )
    }
}

export default connect()(Feeling);