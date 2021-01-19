import {
    INCREMENT_ASYNC,
    INCREMENT_ACT,
    SEND_SUCCESS,
    SHOW_NAME,
    DEV_NAME,
    SAVE_TOKEN,
    INIT_TOKEN,
    LOG_OUT,
    LOGOUT_INIT,
    GET_POSTS,GET_POSTS_LOADING,
    GET_POSTS_SUCCESS,GET_POSTS_ERROR
  } from '../actions/actionTypes';
  import {
    takeLatest,
    call,
    put,
    delay,
    
  } from "redux-saga/effects";
 
  
  import { getDummyApi } from '../redux/reducers/reduxActions/actions';
  import { getPostsApi } from '../common/apis';
  
  // This is Worker Saga Generator Function which work on Given Action Asyncronsally.Genrally use for Side Effects(API CALL Etc.)
  
  function* incrementAsync(action) {
    yield delay(3000);
    yield put({
      type: INCREMENT_ASYNC
    });
    // yield put({
  
    //   type: SEND_SUCCESS,
    //   payload: {
    //     apiData:123 ,
    //   }
    // });
    try {
      
      const response1 = yield call(getDummyApi);
      // yield cancel(response1);
  
      console.log("APIResponseSAGA", response1);
      const APD = response1;
      console.log("APD", APD);
  
      yield localStorage.setItem("Data1", JSON.stringify(response1));
  
      yield put({
        type: SEND_SUCCESS,
        payload: {
          apiData: APD
        }
      });
      return response1;
    } catch (e) {}
  }



  function* showDevName(action) { 
      console.log("ShowDevname Saga",action)
      yield put({
        type: SHOW_NAME,
        payload: {
          name: "Nitin"
        }
      });

  }

  function* saveUserToken(action) { 
    console.log("saveUserToken Saga",action.payload)
    yield put({
      type: SAVE_TOKEN,
      payload: {
        tokenData: action.payload.token
      }
    });

}

function* logOutCurrUser(action) { 
    console.log("logOutCurrUser Saga",action.payload)
    yield put({
      type: LOG_OUT,
      payload: {
      
      }
    });

}

function* getPosts(action){ 
  const  payload  = action.payload;
  console.log("getposts sagacall",payload)
yield put({type:GET_POSTS_LOADING})
try{
 const response =  yield call(getPostsApi)

 if (response) {
   console.log("response from saga api",response.data)
   if (payload.from === "Login") {
    yield put({
      type:GET_POSTS_SUCCESS,
      payload:{
        postsData:response.data
      }
    })
   }
   else{
    yield put({
      type:GET_POSTS_SUCCESS,
      payload:{
        postsData:[]
      }
    })
   }
  
 }

}
catch(err){
yield put({
  type:GET_POSTS_ERROR,
  payload:{
    apiError:err
  }
})
}
}
  

  
  // This is Watcher Saga Generator Function which watch the Action "INCREMENT_ACT" in App then
  // run the second Argument of function i.e incrementAsync Function.
  //  Note-:Never Pass the Action Used in Watcher Saga to the Worker Saga as it tends to a loop
  //  Rember that Saga take a Action & return new Updated Action.
  function* watchIncrement() {
    yield takeLatest(INCREMENT_ACT, incrementAsync);
    yield takeLatest(DEV_NAME, showDevName);
    yield takeLatest(INIT_TOKEN, saveUserToken);
    yield takeLatest(LOGOUT_INIT, logOutCurrUser);
    yield takeLatest(GET_POSTS, getPosts);
  }
  
  export default watchIncrement;


  