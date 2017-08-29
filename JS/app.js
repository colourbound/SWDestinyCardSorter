var app = angular.module("myApp", [ngRoute]);

App.controller('CardList', function($scope, $http) {
  $http.get('card-list.json')
       .then(function(res){
          $scope.cardlist = res.data;
        });
});
