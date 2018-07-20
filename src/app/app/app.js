import './app.css';
import template from './app.html';


class AppController {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

export const AppComponent = {
  controller: AppController,
  template
};
