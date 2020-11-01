import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    handleSubmit = () => {
        this.props.history.push('/');
    }

    render () {
        return (
            <>
            <p>Thank you for your response</p>
            <button onClick={this.handleSubmit}>Leave New Feedback</button>
            </>

        )
    }
}

export default connect()(Supported);