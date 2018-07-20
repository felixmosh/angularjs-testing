import './about.css';
import template from './about.html';

class AboutController {
  constructor($log) {
    // $log.info('AboutCtrl instantiated');
    this.title = 'About Works too!';
  }
}

export const AboutComponent = {
  template: template,
  controller: AboutController
};
