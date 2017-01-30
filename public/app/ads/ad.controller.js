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

  function AdController() {
    const vm = this;
  }
}());