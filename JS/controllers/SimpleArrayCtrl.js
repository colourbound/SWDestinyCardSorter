/* THIS IS UNUSED


app.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope, sharedProperties) {

  // Fruits
  $scope.affiliations = ['Hero', 'Neutral', 'Villain'];

  // Selected fruits
  $scope.selection = ['Hero', 'Neutral'];

  // Set globals
  //$scope.setObject = function(newValue) {
   //     $scope.objectValue.data = newValue;
   //     sharedProperties.setObject(newValue);
  //  };
  //sharedProperties.setObject($scope.selection);

  // Toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(affiliationName) {
    var idx = $scope.selection.indexOf(affiliationName);

    // Is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.selection.push(affiliationName);
        $scope.setObject = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setObject(newValue);
    };
    }
  };
}]);*/
