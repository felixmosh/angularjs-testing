import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {AppComponent} from './app/app';
import {CommonModule} from './common';
import {MoviesModule} from './movies';

angular
  .module('app', [
    uiRouter,
    CommonModule,
    MoviesModule
  ])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('list', {
        url: '/',
        views: {
          '@': {
            template: '<movie-list movies="$resolve.movies"></movie-list>'
          }
        },
        resolve: {
          movies: (moviesService) => moviesService.loadTopMovies()
        }
      })
      .state('list.movie', {
        url: 'movie/{id:int}',
        views: {
          '@': {
            template: '<movie-details movie="$resolve.movie"></movie-details>'
          }
        },
        resolve: {
          movie: ($stateParams, moviesService) => moviesService.getMovieById($stateParams.id)
        }
      });
  });
