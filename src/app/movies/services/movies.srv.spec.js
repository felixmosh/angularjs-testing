import 'angular-mocks';
import {CommonModule} from '../../common';
import {MoviesModule} from '../index';

describe('Movies Service', () => {
  let service;
  let movie;

  beforeEach(() => angular.mock.module(MoviesModule, CommonModule));

  beforeEach(angular.mock.inject((moviesService, $httpBackend) => {
    movie = {id: 123, title: 'terminator', release_date: '2018-10-10'};
    service = moviesService;
    $httpBackend.whenGET(/\/discover\/movie/).respond({page: 1, total_results: 1000, total_pages: 10, results: [movie]});
  }));

  describe('getTopMovies', () => {
    let movies;

    beforeEach(angular.mock.inject(($httpBackend) => {
      service.loadTopMovies()
        .then((_movies) => {
          movies = _movies;
        });
      $httpBackend.flush();
    }));

    it('should fetch top movies', () => {
      expect(movies.length).toBe(1);
      expect(movies[0]).toEqual(jasmine.objectContaining(movie));
    });

    it('should attach year from release_date', () => {
      expect(movies[0].year).toEqual('2018');
    });
  });

  describe('getMovieById', () => {
    it('should get movie by id', angular.mock.inject(($httpBackend) => {
      service.getMovieById(movie.id).then((_movie) => {
        expect(_movie).toEqual(jasmine.objectContaining(movie));
      });
      $httpBackend.flush();
    }));
  });
});
