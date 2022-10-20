import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux';
import { filterReducer } from '../reducers/filterReducer';
import { todosReducer } from '../reducers/todosReducer';

const reducer = combineReducers({
    todosState: todosReducer,
    filterState : filterReducer
})

const store = configureStore({
    reducer,
})

export default store;