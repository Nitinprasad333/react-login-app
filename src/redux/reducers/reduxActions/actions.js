import {
    INCREMENT_ACT,ADD,DECREMENT_ACT,SUB,RESET,
    SHOW_RESULT,SHOW_ALEART,CLOSE_ALEART,SEND_SUCCESS} from '../../../actions/actionTypes';
import axios from "axios";


export const incrementUpdate = () => {
    return {
      type: INCREMENT_ACT,
      payload: {

      }
    };
  };

  export const decrementUpdate = () => {
    return {
      type: DECREMENT_ACT,
      payload: {

      }
    };
  };

  export const add = (number) => {
    return {
      type: ADD,  
      payload: {
            number
      }
    };
  };

  export const sub = (number) => {
    return {
      type: SUB,  
      payload: {
            number
      }
    };
  };

  export const reset = () => {
    return {
      type: RESET,  
      payload: {
            
      }
    };
  };

  export const result = () => {
    return {
      type: SHOW_RESULT,  
      payload: {
            
      }
    };
  };

  export const showAleart = () => {
    console.log("showAleartcall")
    return {
      type: SHOW_ALEART, 
      payload: {
            
      }
    };
  };

  export const closeAleart = () => {
    console.log("showAleartcall")
    return {
      type: CLOSE_ALEART,  
      payload: {
            
      }
    };
  };

  export const getDummyApi = () => {
  const myData = axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(data => {
        console.log("APIRES", data.data[0]);         
        const apd = data.data[0]
        console.log("DATAT",apd)
        return apd;
      })

      return myData;
     
  };