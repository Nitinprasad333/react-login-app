import React from "react";
import {
    INCREMENT_ACT,
  DECREMENT_ACT,
  ADD,
  SUB,
  RESET,
  INCREMENT_ASYNC,
  SHOW_ALEART,
  CLOSE_ALEART,
  SEND_SUCCESS,
  SHOW_NAME,
  SAVE_TOKEN,
  LOG_OUT
} from  '../../actions/actionTypes';


const initialState = {
  counter: 5,
  showAleart: false,
  apiDataUse:{},
  devName:'',
  title:"React CRUD App",
  appToken:null
};

const CounterReducer = (state = initialState, action) => {
  console.log("Reducer Call")
  switch (action.type) {
    case INCREMENT_ASYNC:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_ACT:
      return { ...state, counter: state.counter - 1 };
    case ADD:
      return { ...state, counter: state.counter + action.payload.number };
    case SUB:
      return { ...state, counter: state.counter - action.payload.number };
    case RESET:
      return { ...state, counter: 0 };
    case INCREMENT_ASYNC:
      return { ...state, counter: state.counter };
    case SHOW_ALEART:
      return { ...state, showAleart: true };
    case CLOSE_ALEART:
      return { ...state, showAleart: false };
      case SEND_SUCCESS:
          console.log("SEND_SUCCESSCALL",action.payload)
        return { ...state,
          apiDataUse:action.payload.apiData};

          case SHOW_NAME:
            console.log("SHOW_NAME REDUCER",action.payload)
          return { 
              ...state,
              devName:"Nitin"
            };
            case SAVE_TOKEN:
                console.log("SAVE_TOKEN Reducer",action.payload)
              return { ...state,
                appToken:action.payload.tokenData};

                case LOG_OUT:
                console.log("LOG_OUT Reducer",action.payload)
              return { ...state,
                appToken:null
            };
    default:
      return state;
  }
};

export default CounterReducer;