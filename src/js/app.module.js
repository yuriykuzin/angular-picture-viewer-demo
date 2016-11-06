import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import navbarComponent from './navbar/navbar.component.js';
import imagesShowComponent from './shared/images-show/images-show.component';
import home from './pages/home';
import album from './pages/album';

import '../css/main.scss';

export default angular.module('app', [uirouter, home, album])
  .component('navbar', navbarComponent)
  .component('showimages', imagesShowComponent)
  .config(routing)
  .name;
