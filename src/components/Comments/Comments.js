import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        feeling: ''
    }
    
    handleSubmit = () => {
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
            <div className="form">
                <p>Any additional comments?</p>
                <input onChange={this.handleChange} type="text" placeholder="Additional comments"/>
                <button onClick={this.handleSubmit}>NEXT</button>
            </div>

        )
    }
}

export default connect()(Comments);