(function() {
  'use strict';

  angular.module('classifieds')
    .component('ad', {
      bindings: {
        'adData': '<'
      },
      controller: AdController,
      templateUrl: 'app/ads/ad.template.html'
    });

  AdController.$inject = ['adService'];

  function AdController(adService) {
    const vm = this;

    vm.deleteAd = function() {
      adService.deleteAd(vm.adData.id);
    };
  }
}());