import {createStore, combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import Mode from './mode/rtlmode'
import moviesReducer from './movies/moviesSlices'
const rootReducer = combineReducers({
    mode: Mode,
    movies: moviesReducer,

})

export const store = configureStore({
    reducer: rootReducer,
  })
  