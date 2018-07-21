import template from './movie-list.html';
import './movie-list.css';

class MovieListController {
  constructor() {

  }
}

export const MovieListComponent = {
  controller: MovieListController,
  template,
  bindings: {
    movies: '<'
  }
};
