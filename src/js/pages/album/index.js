import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './album.routes';
import HomeController from './album.controller';

import imagesShowComponent from '../../shared/images-show/images-show.component';

export default angular.module('app.album', [uirouter])
  .config(routing)
  .controller('AlbumController', HomeController)
  .component('showimages', imagesShowComponent)
  .name;