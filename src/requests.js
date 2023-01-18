const API_KEY = "e7f6802f280a73a46e65a3053fd0307e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTvSeries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    popularSeptemberMovie: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

  };
  
  export default requests;

  // fetchTrending
  // upcomming
  // tv series
  // popular movie on september