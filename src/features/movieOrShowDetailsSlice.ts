import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiKey } from '../common/api/MovieApiKey';
import movieApi from "../common/api/movieApi.js";


const initialState = {
  details: {},
}

export const fetchAsyncDetails = createAsyncThunk('shows/fetchAsyncDetails',async (imdbId: string) => {
    const response = await movieApi.get(`?apikey=${apiKey}&i=${imdbId}&plot=full`);    
    return response.data;
});

export const movieOrShowDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    addDetails: (state, { payload })=>{
        state.details = payload;
    },
    removeDetails: (state) => {
        state.details = initialState
    }
  },
  extraReducers: {
    [fetchAsyncDetails.pending]: () => console.log('Pending'),
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfylly !");
        return { ... state, details: payload};
    },
    [fetchAsyncDetails.rejected]: () => console.log("Rejected !")
  }
})

export const getDetails = (state: any) => state.details.details;

// Action creators are generated for each case reducer function
export const { addDetails, removeDetails } = movieOrShowDetailsSlice.actions

export default movieOrShowDetailsSlice.reducer