import 'angular-mocks';
import {CommonModule} from '../../../common';
import {MoviesModule} from '../../index';
import {MovieDetailsDriver} from '../movie-details/movie-details.driver';

export class MovieListDriver {
  constructor() {
    angular.mock.module(MoviesModule, CommonModule);
  }

  given = {
    movie: (movie) => {
      this.movie = movie;
      return this;
    }
  };
  when = {
    created: () => {
      angular.mock.inject(($rootScope, $compile) => {
        const scope = $rootScope.$new();
        scope.movies = [this.movie];
        this.component = $compile(`<movie-list movies="movies"></movie-list>`)(scope);
        scope.$apply();
      });
    }
  };

  get = {
    list: () => this.component.find('[data-hook="movie"]'),
    movieItemDriver: (index) => new MovieDetailsDriver(angular.element(this.get.list().get(index))),
  }
}
