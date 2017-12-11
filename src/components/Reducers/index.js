import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Postreducer from './PostReducer'

const rootReducer = combineReducers({
   form: formReducer,
   posts: PostReducer 
});
