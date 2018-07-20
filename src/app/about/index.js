import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {AboutComponent} from './about';

export const AboutModule = angular
  .module('about', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('about', {
      url: '/about',
      template: '<about></about>'
    });
  })
  .component('about', AboutComponent)
  .name;
