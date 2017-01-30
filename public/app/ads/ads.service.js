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

    this.newAd = function(ad) {
      return $http.post('/classifieds', ad)
        .then((response) => {
          this.ads.push(response.data);
        });
    };

    this.deleteAd = function(index) {
      return $http.delete(`/classifieds/${index}`)
        .then((response) => {
          this.ads.splice(index - 1, 1);
        });
    };
  }
}());