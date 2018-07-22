import angular from 'angular';
import {MovieDetailsComponent} from './components/movie-details/movie-details';
import {MovieListComponent} from './components/movie-list/movie-list';
import {MoviesService} from './services/movies.srv';

export const MoviesModule = angular.module('MoviesModule', [])
  .component('movieList', MovieListComponent)
  .component('movieDetails', MovieDetailsComponent)
  .service('moviesService', MoviesService)
  .name;
