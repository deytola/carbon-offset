import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from '@/lib/features/index';


const rootReducer = combineReducers({
   auth: authReducer
});

export default rootReducer;