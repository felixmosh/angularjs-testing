import './app.css';
import template from './app.html';


class AppController {
  constructor($state, googleAnalytics) {
    this.$state = $state;
    this.googleAnalytics = googleAnalytics;
  }

  $onInit() {
    this.googleAnalytics.trackLoad('app-loaded');
  }

  isOnMovieDetails() {
    return this.$state.is('list.movie');
  }
}

export const AppComponent = {
  controller: AppController,
  template
};
