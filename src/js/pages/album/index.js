import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './album.routes';
import AlbumController from './album.controller';

export default angular.module('app.album', [uirouter])
  .config(routing)
  .controller('AlbumController', AlbumController)
  .name;