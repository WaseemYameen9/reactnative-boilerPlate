import {configureStore} from '@reduxjs/toolkit'
import combineReducers from './rootReducer';


const store  = configureStore({
    reducer:combineReducers,
});


export default store;