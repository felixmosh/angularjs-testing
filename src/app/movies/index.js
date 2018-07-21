import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {MovieDetailsComponent} from './components/movie-details/movie-details';
import {MovieListComponent} from './components/movie-list/movie-list';
import {MoviesService} from './services/movies.srv';

export const MoviesModule = angular.module('MoviesModule', [uiRouter])
  .component('movieList', MovieListComponent)
  .component('movieDetails', MovieDetailsComponent)
  .service('moviesService', MoviesService)
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
  })
  .name;
