import {
    INCREMENT_ACT,ADD,DECREMENT_ACT,SUB,RESET,
    SHOW_RESULT,SHOW_ALEART,CLOSE_ALEART,
    DEV_NAME,
    INIT_TOKEN,
    LOGOUT_INIT,
    GET_POSTS,
    GET_SINGLE_POST} from '../../../actions/actionTypes';
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


  export const showDevName = () => {
    console.log("showDevName")
    return {
      type:DEV_NAME  
   
    };
  };


export const saveTokenAction = (token) => {
    console.log("saveTokenAction",token)
    return {
      type: INIT_TOKEN,  
      payload: {
            token
      }
    };
  };

  export const LogoutAction = () => {
    console.log("LogoutAction")
    return {
      type: LOGOUT_INIT,  
      payload: {
            
      }
    };
  };

  export const getPostsAction = (data) => {
    console.log("getPostsAction",data)
    return {
      type: GET_POSTS,  
      payload: {
        from:data
      }
    };
  };

  export const getPostSingle = (id) => { 
    console.log("getPostsAction",id)
    return {
      type: GET_SINGLE_POST,  
      payload: {
        id:id
      }
    };
  };