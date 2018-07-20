import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {HomeComponent} from './home';

export const HomeModule = angular
  .module('home', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
  })
  .component('home', HomeComponent)
  .name;
