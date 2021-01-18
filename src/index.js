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
import watchIncrement from '../src/saga/saga';
import {rootReducer } from '../src/redux/reducers/rootReducer';
import { loadState, saveState } from '../src/common/commonState';
import _ from "lodash";
import watchersRootSaga from './saga/rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedState = loadState();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  
  
  const store = createStore(rootReducer,persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  
  sagaMiddleware.run(watchersRootSaga);

  store.subscribe(_.throttle(() => {
    saveState(store.getState());
  }, 1000));

return store; 
}

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
