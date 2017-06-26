'use strict';

angular.
  module('testApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/candidatos', {
          template: '<lista-candidatos></lista-candidatos>'
        }).
        when('/candidatos/:candidatoId', {
          template: '<detalle-candidatos></detalle-candidatos>'
        }).
        otherwise('/candidatos');
    }
  ]);
