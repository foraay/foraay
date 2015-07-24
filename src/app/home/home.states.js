'use strict';

angular.module('foraay')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        parent: 'sideNav',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      })
  });