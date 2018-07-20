import angular from 'angular';
import {AboutModule} from './about';
import {AppComponent} from './app/app';
import {HomeModule} from './home';

angular
  .module('app', [
    HomeModule,
    AboutModule
  ])
  .component('app', AppComponent);
