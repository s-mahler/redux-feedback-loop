import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
    
    handleSubmit = (event) => {
        axios.post('/response', this.props.reduxStore.feedbackReducer).then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
        this.props.history.push('/success');
    }
    
    render () {
        return (
            <div className="form">
            <h3>Review your submissions</h3>
            {/* Object.keys was used here to map an object rather than an array */}
            {/* The list items are locked into the name of the key of the object */}
                {/* Would be better if that was editable */}
            <ul>
                {Object.keys(this.props.reduxStore.feedbackReducer).map((key, index) => {
                    return <li key={index}>{key}: {this.props.reduxStore.feedbackReducer[key]}</li>;
                })}
            </ul>
            <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(Review);