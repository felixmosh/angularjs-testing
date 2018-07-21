import 'angular-mocks';
import {CommonModule} from '../../common';
import {MoviesModule} from '../index';

export class MoviesServiceDriver {

  constructor() {
    angular.mock.module(MoviesModule, CommonModule);
  }

  when = {
    created: () => {
      angular.mock.inject((moviesService) => {
        this.service = moviesService;
      });
    },
    flush: () => {
      angular.mock.inject(($httpBackend) => {
        $httpBackend.flush();
      });
    }
  };

  given = {
    movieList: (list) => {
      angular.mock.inject(($httpBackend) => {
        $httpBackend.whenGET(/.*\/discover\/movie/g).respond(() => {
          return [200, {page: 1, total_results: 1000, total_pages: 10, results: list}];
        });
      });
      return this;
    }
  };
}
