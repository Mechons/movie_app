import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import movieApi from "../../common/Api/api";
import { API_KEY } from "../../common/Api/ApiKey";
export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${API_KEY}&s=${movieText}&type=movie`
      );
      return response.data;
    }
  );
const initialState  = {
    movies: {}
}

const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers : {
        
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : ()=> {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
          },
          [fetchAsyncMovies.rejected] : ()=> {
            console.log("Rejected");
          }
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies;
export default movieSlice.reducer