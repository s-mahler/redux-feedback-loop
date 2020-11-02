import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    handleSubmit = () => {
        this.props.history.push('/');
    }

    render () {
        return (
            <div className="form">
                <p>Thank you for your response</p>
                <button onClick={this.handleSubmit}>Leave New Feedback</button>
            </div>

        )
    }
}

export default connect()(Supported);