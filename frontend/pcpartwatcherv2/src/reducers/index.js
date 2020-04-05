import {combineReducers} from 'redux';
import watcherReducer from './watcherReducer';

export default combineReducers({
    parts: watcherReducer
});