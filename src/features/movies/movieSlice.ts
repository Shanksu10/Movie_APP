import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { MovieState } from '.'
import movieApi from "../../common/api/movieApi.js"
import { apiKey } from '../../common/api/MovieApiKey';


const initialState: MovieState = {
  movies: {},
}

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (movieText: string) => {  
  const response = await movieApi.get(`?apiKey=${apiKey}&type=movie&s=${movieText}`).catch((error: Error)=>{
    console.log("Error : ", error)
    return error;
})    
return response.data;
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, {payload}) => {
        state.movies = payload
    },
    errorMovies: (state, action) => {
        state.movies = action.payload
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => console.log('Pending'),
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfylly !");
        return { ... state, movies: payload};
    },
    [fetchAsyncMovies.rejected]: () => console.log("Rejected !")
  }
})

export const getMovies = (state: any) => state.movies.movies;

// Action creators are generated for each case reducer function
export const { addMovies, errorMovies } = movieSlice.actions

export default movieSlice.reducer