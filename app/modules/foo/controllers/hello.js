define(function(require) {

  var module = require('module!@');

  // we could load Greater with this:
  // require('service!application:factory/greater');
  // But this service is loaded in application-includes.js

  module.controller('foo.controllers.hello', [
    '$scope',
    'application.factory.greeter',
    function(
        $scope,
        Greeter
     ) {

      angular.extend($scope, {
        greetings: Greeter.sayHelloToMe('tuchk4')
      });
    }
  ]);
});
