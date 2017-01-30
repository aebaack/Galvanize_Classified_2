(function() {
  'use strict';

  angular.module('classifieds')
    .component('display', {
      controller: AdsController,
      templateUrl: 'app/ads/ads.template.html'
    });

    AdsController.$inject = ['adService'];

    function AdsController(adService) {
      const vm = this;

      vm.$onInit = function() {
        adService.getAds()
          .then(() => vm.ads = adService.ads);
      };
    }
}());