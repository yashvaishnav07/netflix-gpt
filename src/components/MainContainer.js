import React from 'react'
import { useSelector } from 'react-redux'
import VideoTItle from './VideoTItle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const movieIndex = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[movieIndex];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTItle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer