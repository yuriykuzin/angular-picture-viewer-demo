import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './image.routes';
import ImageController from './image.controller';

export default angular.module('app.image', [uirouter])
  .config(routing)
  .controller('ImageController', ImageController)
  .name;