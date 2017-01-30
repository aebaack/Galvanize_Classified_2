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

    this.deleteAd = function(adId) {
      return $http.delete(`/classifieds/${adId}`)
        .then((response) => {
          const adIndex = this.ads.indexOf(this.ads.find(ad => ad.id === adId));
          this.ads.splice(adIndex, 1);
        });
    };
  }
}());