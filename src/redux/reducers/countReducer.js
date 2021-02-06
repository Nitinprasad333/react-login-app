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
  LOG_OUT,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_SINGLE_POSTS_LOADING,
  GET_SINGLE_POSTS_SUCCESS,
  GET_SINGLE_POSTS_ERROR
} from  '../../actions/actionTypes';


const initialState = {
  counter: 5,
  showAleart: false,
  apiDataUse:{},
  devName:'',
  title:"React CRUD App",
  appToken:null,
  isLoading:false,
  isError:false,
  allPosts:null,
  singlePost:null,
 
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
                appToken:action.payload.tokenData,
             
              };

                case LOG_OUT:
                console.log("LOG_OUT Reducer",action.payload)
              return { ...state,
                appToken:null
            };
            case GET_POSTS_LOADING:
              console.log("GET_POSTS_LOADING",action.payload)
            return { ...state,
              isLoading:true
          };
          case GET_POSTS_SUCCESS:
            console.log("GET_POSTS_SUCCESS Reducer",action.payload)
          return { 
            ...state,
            allPosts:action.payload.postsData
        };
        case GET_POSTS_ERROR:
          console.log("GET_POSTS_ERROR Reducer",action.payload)
        return { 
          ...state,
          isError:action.payload.apiError
      };

      case GET_SINGLE_POSTS_LOADING:
        console.log("GET_SINGLE_POSTS_LOADING",action.payload)
      return { ...state,
        isLoading:true
    };
    case GET_SINGLE_POSTS_SUCCESS:
      console.log("GET_SINGLE_POSTS_SUCCESS Reducer",action.payload)
    return { 
      ...state,
      singlePost:action.payload.singleData
  };
  case GET_SINGLE_POSTS_ERROR:
    console.log("GET_POSTS_ERROR Reducer",action.payload)
  return { 
    ...state,
    isError:action.payload.apiError
};

    default:
      return state;
  }
};

export default CounterReducer;
