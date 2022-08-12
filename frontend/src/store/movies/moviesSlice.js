import { createSlice } from '@reduxjs/toolkit'


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {data: [], page: 0},
  reducers: {
    setMovies(state, action) {
      const { movies } = action.payload
      state.data = movies;
    },
  }

})

export const { setMovies } = moviesSlice.actions
export default moviesSlice.reducer 