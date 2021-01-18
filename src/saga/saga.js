import {
    INCREMENT_ASYNC,
    INCREMENT_ACT,
    SEND_SUCCESS,
    SHOW_NAME,
    DEV_NAME,
    SAVE_TOKEN,
    INIT_TOKEN,
    LOG_OUT,
    LOGOUT_INIT
  } from '../actions/actionTypes';
  import {
    takeLatest,
    takeEvery,
    call,
    put,
    delay,
    resolve,
    take,
    fork,
    cancel
  } from "redux-saga/effects";
 
  import axios from "axios";
  
  import { getDummyApi } from '../redux/reducers/reduxActions/actions'
  
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
  

  
  // This is Watcher Saga Generator Function which watch the Action "INCREMENT_ACT" in App then
  // run the second Argument of function i.e incrementAsync Function.
  //  Note-:Never Pass the Action Used in Watcher Saga to the Worker Saga as it tends to a loop
  //  Rember that Saga take a Action & return new Updated Action.
  function* watchIncrement() {
    yield takeLatest(INCREMENT_ACT, incrementAsync);
    yield takeLatest(DEV_NAME, showDevName);
    yield takeLatest(INIT_TOKEN, saveUserToken);
    yield takeLatest(LOGOUT_INIT, logOutCurrUser);
  }
  
  export default watchIncrement;


  