import { combineReducers } from 'redux';
import  CounterReducer   from '../reducers/countReducer';
export const rootReducer = combineReducers({
    countRed: CounterReducer,
  });