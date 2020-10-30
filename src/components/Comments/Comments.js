import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        feeling: ''
    }
    
    handleSubmit = () => {
        console.log(this.state.feeling);
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.feeling})
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
            <p>Any additional comments?</p>
            <input onChange={this.handleChange} type="text" placeholder="Additional comments"/>
            <button onClick={this.handleSubmit}>NEXT</button>
            </>

        )
    }
}

export default connect()(Comments);