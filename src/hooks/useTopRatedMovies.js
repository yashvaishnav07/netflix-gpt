import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatingMovies = async () => {
    const dispatch = useDispatch()

    const getTopRatingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatingMovies(json.results));
    };

    useEffect(() => {
        getTopRatingMovies();
    }, []);

}

export default useTopRatingMovies