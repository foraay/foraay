
'use strict';

angular.module('foraay')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        views:{
          root: {
             templateUrl: 'app/index.html'
          }
        }

      })
      .state('index', {
        abstract: true,
        parent: 'root',
        views: {
          header: {
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            controllerAs: 'navbarCtrl'
          },
          content: {},
          footer: {
            templateUrl: 'app/components/footer/footer.html'
          }
        }
      })
      .state('middleLayout', {
        parent: 'index',
        abstract: true,
        templateUrl: 'app/components/templates/middle.form.temp.html'
      })
      .state('sideNav', {
          parent: 'index',
          abstract: true,
          templateUrl: 'app/components/templates/sideNav.temp.html',
          controller: function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
              $mdSidenav('left').close()
                .then(function () {
                  $log.debug("close LEFT is done");
                });
            };
          }
        });

    $urlRouterProvider.otherwise('/');
  });