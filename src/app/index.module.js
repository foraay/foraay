'use strict';

angular.module('foraay', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ngMaterial'
])
  .run(function($rootScope, $state, log, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      if (!AuthService.initialized) {
        AuthService.init()
          .then(function(user) {
            if (user) {
              $state.go(toState, toParams);
            } else {
              $state.go('login');
            }
          })
          .catch(function(err) {
            log.error(err);
            $state.go('login');
          });

        event.preventDefault();
      }
      else if (!AuthService.isLoggedIn && toState.name !== 'login') {
        $state.go('login');
        event.preventDefault();
      }
    });
  });

