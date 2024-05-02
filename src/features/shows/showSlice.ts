import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiKey } from '../../common/api/MovieApiKey';
import movieApi from "../../common/api/movieApi.js";


const initialState = {
  shows: {},
}

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows',async (seriesText: string) => {
    const response = await movieApi.get(`?apikey=${apiKey}&type=series&s=${seriesText}`);    
    return response.data;
});

export const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    addShows: (state, { payload })=>{
        state.shows = payload;
    }
  },
  extraReducers: {
    [fetchAsyncShows.pending]: () => console.log('Pending'),
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfylly !");
        return { ... state, shows: payload};
    },
    [fetchAsyncShows.rejected]: () => console.log("Rejected !")
  }
})

export const getShows = (state: any) => state.shows.shows;

// Action creators are generated for each case reducer function
export const { addShows } = showSlice.actions

export default showSlice.reducer