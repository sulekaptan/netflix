const key = '2cc35d00bd31bf0df4e98502278a8fbc'

const requests = {
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    fetchTopRated:  `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    fetchHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests 