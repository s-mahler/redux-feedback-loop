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
            <>
            <p>REVIEW</p>
            <div>
                {Object.keys(this.props.reduxStore.feedbackReducer).map((key, index) => {
                    return <div key={index}>{key}: {this.props.reduxStore.feedbackReducer[key]}</div>;
                })}
            </div>
            <button onClick={this.handleSubmit}>SUBMIT</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapStateToProps)(Review);