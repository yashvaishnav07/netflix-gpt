import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = async () => {
    const dispatch = useDispatch()

    const getupComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    };

    useEffect(() => {
        getupComingMovies();
    }, []);

}

export default useUpComingMovies