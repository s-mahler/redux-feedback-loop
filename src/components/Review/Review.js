import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render () {
        return (
            <p>REVIEW</p>
        )
    }
}

export default connect()(Review);