import 'angular-mocks';
import {CommonModule} from '../../../common';
import {MoviesModule} from '../../index';

export class MovieDetailsDriver {
  constructor(component) {
    if (component) {
      this.component = component;
    } else {
      angular.mock.module(MoviesModule, CommonModule);
    }
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
        scope.movie = this.movie;
        this.component = $compile(`<movie-details movie="movie"></movie-details>`)(scope);
        scope.$apply();
      });
    }
  };

  get = {
    title: () => this.component.find('[data-hook="title"]').text().trim(),
    description: () => this.component.find('[data-hook="description"]').text(),
    poster: () => this.component.find('[data-hook="movie-poster"]')
  }
}
