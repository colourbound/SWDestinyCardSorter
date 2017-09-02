app.controller('ObjectArrayCtrl', ['$scope', 'filterFilter', function ObjectArrayCtrl($scope, filterFilter) {

  // Affiliation
  $scope.affiliations = [
    { name: 'Hero',    selected: true },
    { name: 'Neutral',   selected: false },
    { name: 'Villain',     selected: false }
  ];

  // Selected affiliations
  $scope.selection = [];

  // Helper method to get selected fruits
  $scope.selectedAffiliations = function selectedAffiliations() {
    return filterFilter($scope.affiliations, { selected: true });
  };

  // Watch fruits for changes
  $scope.$watch('affiliations|filter:{selected:true}', function (nv) {
    $scope.selection = nv.map(function (affiliation) {
      return affiliation.name;
    });
  }, true);
}]);
