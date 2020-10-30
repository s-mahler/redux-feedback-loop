import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render () {
        return (
            <p>UNDERSTANDING</p>
        )
    }
}

export default connect()(Understanding);