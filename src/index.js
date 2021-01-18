import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login';
import Routes from './components/Routes';
import { createStore,applyMiddleware,compose,combineReducers  } from 'redux';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import CounterReducer from './redux/reducers/countReducer';
import watchIncrement from './saga/saga';
import {rootReducer } from '../src/redux/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const Store = createStore(rootReducer,/* preloadedState, */ 
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchIncrement);

ReactDOM.render(
  <Provider store={Store}>
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
