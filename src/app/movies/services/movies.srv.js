export class MoviesService {
  constructor($http, API_KEY, API_URL, $q) {
    this.$http = $http;
    this.API_KEY = API_KEY;
    this.API_URL = API_URL;
    this.defered = $q.defer();
  }

  loadTopMovies() {
    this.$http.get(this.getUrl())
      .then(response => {
        this.movies = MoviesService.fromDTO(response.data.results) || [];
        this.defered.resolve(this.movies);
      });
    return this.defered.promise;
  }

  getUrl() {
    return `${this.API_URL}?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${this.API_KEY}`;
  }

  getMovieById(movieId) {
    return this.defered.promise
      .then(() => this.movies.filter(movie => movie.id === movieId)[0]);
  }

  static fromDTO(movies) {
    return movies.map((movie) => ({
      ...movie,
      year: movie.release_date.split('-')[0]
    }));
  }
}
