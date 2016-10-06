import {  delay } from 'redux-saga';
import { call, put, race, take } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
const IDLE_TIMEOUT = 30 * 1000;

let isActive = true;
export function* trackActivity() {
  while(true){
    const {idle, active} = yield race({
      idle: call(delay, IDLE_TIMEOUT),
      active: take(actionTypes.onActivity)
    });

    if(idle && isActive) { //Going from Active to Idle
      isActive = !isActive;
     yield put({
        type: actionTypes.onIdle
      })
    } else if (active && !isActive) { //Going from Idle to Active
      isActive = !isActive;
      yield put({
        type: actionTypes.onActive
      })
    }
  }
}