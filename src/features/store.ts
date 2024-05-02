import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movies/movieSlice'
import showSlice from './shows/showSlice'
import movieOrShowDetailsSlice from './movieOrShowDetailsSlice'

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    shows: showSlice,
    details: movieOrShowDetailsSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch