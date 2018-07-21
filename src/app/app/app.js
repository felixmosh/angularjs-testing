import './app.css';
import template from './app.html';


class AppController {
  constructor($state) {
    this.$state = $state;
  }

  isOnMovieDetails() {
    return this.$state.is('list.movie');
  }
}

export const AppComponent = {
  controller: AppController,
  template
};
