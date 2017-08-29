var App = angular.module('myApp', []);

App.controller('TodoCtrl', function($scope, $http) {
  $http.get('card-list.json')
       .then(function(res){
          $scope.todos = res.data;
        });
});
