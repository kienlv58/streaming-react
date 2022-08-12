import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import Mode from './mode/rtlmode'

import moviesReducer from './movies/moviesSlice'
const rootReducer = combineReducers({
    mode: Mode,
    movies: moviesReducer,

})

export const store = configureStore({
    reducer: rootReducer,
  })