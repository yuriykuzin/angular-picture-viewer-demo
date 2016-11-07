import template from './images-show.html';

class Controller {
  images = [];
  imagesToShow = [];
  albumTitle = '';
  constructor($http, $scope) {
    $http.get((!this.albumid) ?
        'https://jsonplaceholder.typicode.com/photos' :
        'https://jsonplaceholder.typicode.com/albums/' + this.albumid + '/photos')
      .success(response => {
        this.images = response;
        this.imagesToShow = this.images.slice(0, Math.min(9, this.images.length));
      });
    if (this.albumid) {
      $http.get('https://jsonplaceholder.typicode.com/albums/' + this.albumid)
        .success(response => this.albumTitle = response.title);
    }
    window.addEventListener('scroll', () => this.onScroll($scope));
  }

  onScroll($scope) {
    let scrollMax = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ) - window.innerHeight - 50;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= scrollMax && this.images.length > this.imagesToShow.length) {
      // Show 6 more images if possible
      let addTo = Math.min(6, this.images.length - this.imagesToShow.length) + this.imagesToShow.length;
      this.imagesToShow = this.imagesToShow.concat(this.images.slice(this.imagesToShow.length, addTo));
    }
    $scope.$apply();
  }
}

let component = {
  bindings: {
    albumid: '<',
  },
  template,
  controller: Controller,
};

export default component;
