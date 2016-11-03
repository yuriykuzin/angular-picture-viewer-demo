import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import navbarComponent from './navbar/navbar.component.js';
import home from './pages/home';

import '../css/main.scss';

export default angular.module('app', [uirouter, home])
  .component('navbar', navbarComponent)
  .config(routing)
  .name;
