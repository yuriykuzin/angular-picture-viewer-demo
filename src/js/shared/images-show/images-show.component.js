import template from './images-show.html';

class Controller {
	constructor() {
		this.images = query();
	}
}

let component = {
	bindings: {},
	template,
	controller: Controller,
};

export default component;
