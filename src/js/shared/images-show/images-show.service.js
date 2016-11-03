export default class ImagesShowService {
	constructor ($resource) {
		'ngInject';
		return $resource(
			'https://api.github.com/users/:username/repos',
			{},
			{
				'getRepos': {
					method: 'GET',
					isArray: true
				}
			}
		);
	}
};

// TODO: continue implementing this service
// reference: https://github.com/nearbycoder/boilerplate-es6-angular-webpack/blob/master/src/app/components/home/index.js
