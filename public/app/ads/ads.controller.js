(function() {
  'use strict';

  angular.module('classifieds')
    .component('display', {
      controller: AdsController,
      templateUrl: 'app/ads/ads.template.html'
    });

    function AdsController() {
      const vm = this;
    }

}());