import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    state = {
        feeling: 0
    }
    
    handleSubmit = () => {
        console.log(this.state.feeling);
        this.props.dispatch({type: 'ADD_SUPPORTED', payload: this.state.feeling})
        this.props.history.push('/review');
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

export default connect()(Supported);