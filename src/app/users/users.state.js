'use strict';

angular.module('users')
  .config(function($stateProvider){
    $stateProvider
      .state('signup', {
        parent: 'auth',
        url: '/users/signup',
        templateUrl: 'app/users/users-signup/signup.html',
        controller: 'UserSignupCtrl',
        controllerAs: 'userSignupCtrl'
      })
      .state('userprofile', {
        parent: 'middleLayout',
        url: '/user/profile',
        templateUrl: "app/users/users.profile/user-profile.html"
      })

  });