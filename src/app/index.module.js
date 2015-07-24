'use strict';

angular.module('foraay', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'auth',
  'log',
  'users',
  'db',
  'config'
])
  .run(function($rootScope, $state, log, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      /*if (!AuthService.isLoggedIn){
        AuthService.getCurrentSession()
          .then(AuthService.getUser)
          .then(function(response){
            $rootScope.$broadcast('newLogIn', response);
            AuthService.isLoggedIn = true;
            return response;
            //Todo: on login both login controller and state change event fires the newLogIn event
          })
          .catch(function() {
            if (toState.name !== 'login' && toState.name !== 'signup') {
              $state.go('login');
              event.preventDefault();
            }
          })
      }*/
    });
  });

