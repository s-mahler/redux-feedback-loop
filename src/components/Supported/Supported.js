import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    render () {
        return (
            <p>SUPPORTED</p>
        )
    }
}

export default connect()(Supported);