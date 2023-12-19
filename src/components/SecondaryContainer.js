import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return (
        <div className='bg-black'>
            <div className='-mt-64 relative pl-12 z-20'>
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer