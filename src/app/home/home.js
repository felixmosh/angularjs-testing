import './home.css';
import template from './home.html';

class HomeController {
  constructor($log) {
    // $log.info('HomeCtrl instantiated');
    this.title = 'Home Works!';
  }
}

export const HomeComponent = {
    template: template,
    controller: HomeController
};
