import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatingMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.upComingMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatingMovies, addUpComingMovies } = movieSlice.actions;
export default movieSlice;