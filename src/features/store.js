import {configureStore} from "@reduxjs/toolkit"
import moviesReducer from './movies/MovieSlice'
const store =  configureStore({
    reducer : {
       movies :moviesReducer,
    }
})

export default store