import { combineReducers } from 'redux';
import watchItems from './watchItems';


const testApp = combineReducers({
  watchItems
});

export default testApp;