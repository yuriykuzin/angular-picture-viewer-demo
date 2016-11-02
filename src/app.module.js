import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './home';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/main.scss';

angular.module('app', [uirouter, home])
  .config(routing);
