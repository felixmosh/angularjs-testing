import angular from 'angular';
import {API_KEY, API_URL} from './constants';
import {toUpperCase} from './to-upper-case.filter';

export const CommonModule = angular.module('commonModule', [])
  .constant('API_KEY', API_KEY)
  .constant('API_URL', API_URL)
  .filter('toUpperCase', toUpperCase)
  .name;
