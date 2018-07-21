import angular from 'angular';
import {AppComponent} from './app/app';
import {CommonModule} from './common';
import {MoviesModule} from './movies';

angular
  .module('app', [
    CommonModule,
    MoviesModule
  ])
  .component('app', AppComponent);
