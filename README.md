# Angular Picture Viewer Demo

Live version is here:
https://yuriykuzin.github.io/angular-picture-viewer-demo/

todo:

- take eslint, jslint all modules and configs from lms app

- add min-safe style of injecting
(http://stackoverflow.com/questions/18950181/javascript-error-unknown-provider-tprovider-t-after-rails-minification-angul)

- investigate how to pass parameters from state to component instead of injecting $state
(this may be helpful: https://github.com/angular-ui/ui-router/issues/2627)

- investigate why it is necessary to call $scope.$apply to refresh the view:
https://github.com/yuriykuzin/angular-picture-viewer-demo/blob/master/src/js/shared/images-show/images-show.component.js

- move $http.get calls from components to service

- investigate how to use $resource and restangular instead of $http

- try to declare less modules

- investigate how to use resolve instead of controllers
