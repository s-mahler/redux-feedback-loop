import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        feeling: 0
    }
    
    handleSubmit = () => {
        console.log(this.state.feeling);
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.feeling})
        this.props.history.push('/supported');
    }

    handleChange = (event) => {
        this.setState({
          feeling: event.target.value
        })
      }

    render () {
        return (
            <>
            <p>Did ya understand it?</p>
            <input onChange={this.handleChange} type="number" placeholder="1 - 5"/>
            <button onClick={this.handleSubmit}>NEXT</button>
            </>

        )
    }
}

export default connect()(Understanding);