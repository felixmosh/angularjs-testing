import {MoviesServiceDriver} from './movies.srv.driver';

describe('Movies Service', () => {
  let driver;
  let movie;

  beforeEach(() => {
    driver = new MoviesServiceDriver();
    movie = {id: 123, title: 'terminator', release_date: '2018-10-10'};
    driver
      .given.movieList([movie])
      .when.created();
  });

  describe('getTopMovies', () => {
    let movies;

    beforeEach(() => {
      driver.service.loadTopMovies()
        .then((_movies) => {
          movies = _movies;
        });
      driver.when.flush();
    });

    it('should fetch top movies', () => {
      expect(movies.length).toBe(1);
      expect(movies[0]).toEqual(jasmine.objectContaining(movie));
    });

    it('should attach year from release_date', () => {
      expect(movies[0].year).toEqual('2018');
    });
  });

  describe('getMovieById', () => {
    it('should get movie by id', () => {
      driver.service.getMovieById(movie.id).then((_movie) => {
        expect(_movie).toEqual(jasmine.objectContaining(movie));
      });

      driver.when.flush();
    });
  });
});
