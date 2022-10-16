import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_KEY = '82ebb658ef4c9a7c380738386a391c82';


export async function fetchTrendMovies() {
    const data = await axios
        .get(
            `${BASE_URL}/trending/movie/day?api_key=${BASE_KEY}&language=en-US&page=1&include_adult=false`,
        )
        .then(resp => resp.data.results);
    return data;
}

export async function fetchMoviesByQuery(query) {
    const data = await axios
        .get(
            `${BASE_URL}/search/movie?api_key=${BASE_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
        )
        .then(resp => resp.data.results);
    return data;
}

export async function fetchMovieById(id) {
    const data = await axios
        .get(`${BASE_URL}/movie/${id}?api_key=${BASE_KEY}&language=en-US`)
        .then(resp => resp.data);
    return data;
}

export async function fetchActorsCast(id) {
    const data = await axios
        .get(`${BASE_URL}/movie/${id}/credits?api_key=${BASE_KEY}&language=en-US`)
        .then(resp => resp.data.cast);
    return data;
}

export async function fetchMovieReviews(id) {
    const data = await axios
        .get(
            `${BASE_URL}/movie/${id}/reviews?api_key=${BASE_KEY}&language=en-US&page=1`,
        )
        .then(resp => resp.data.results);
    return data;
}
