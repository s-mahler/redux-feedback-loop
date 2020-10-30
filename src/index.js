import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD_FEELING':
            return [...state, action.payload];
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
      feedbackReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
