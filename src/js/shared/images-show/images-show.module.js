import angular from 'angular';
import ngResource from 'angular-resource';

import ImagesShowService from './images-show.service';
import imagesShowComponent from './images-show.component';

export default angular.module('images-show', [ngResource])
	.service('imagesShowService', ImagesShowService)
	.name;
