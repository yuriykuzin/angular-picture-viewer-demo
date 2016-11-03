import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './home';
import './assets/styles/main.scss';

angular.module('app', [uirouter, home])
  .config(routing);
