(function() {
  'use strict';

  angular.module('classifieds')
    .service('adService', adService);

  function adService($http) {
    this.ads = [];

    this.getAds = function() {
      return $http.get('/classifieds')
        .then((response) => {
          this.ads = response.data;
        });
    };
  }
}());