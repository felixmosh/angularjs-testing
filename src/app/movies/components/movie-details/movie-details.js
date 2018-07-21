import template from './movie-details.html';
import './movie-details.css';

class MovieDetailsController {
}

export const MovieDetailsComponent = {
  controller: MovieDetailsController,
  template,
  bindings: {
    movie: '<'
  }
};
