import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3"
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const api = axios.create({
    baseUrl: BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`

    }


})


export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

//requests

export const getPopularMovies = (page = 1) => api.get('/movie/popular', {params: {page}})

export const searchMovies = (query, page = 1) => api.get('search/movies', {params: {query, page}})

export const getMovieDetails = (id) => api.get('/movie/' + id) (`/movie/${id}`)