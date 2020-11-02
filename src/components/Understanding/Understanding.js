import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        feeling: 0
    }
    
    handleSubmit = () => {
        if (this.state.feeling < 1 || this.state.feeling > 5) {
            alert('Enter a value between 1 and 5');
        } else {
            this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.feeling})
            this.props.history.push('/supported');
        }
    }

    handleChange = (event) => {
        this.setState({
          feeling: event.target.value
        })
      }

    render () {
        return (
            <div className="form">
                <p>Did you understand the material?</p>
                <input onChange={this.handleChange} type="number" placeholder="1 - 5"/>
                <button onClick={this.handleSubmit}>NEXT</button>
            </div>

        )
    }
}

export default connect()(Understanding);