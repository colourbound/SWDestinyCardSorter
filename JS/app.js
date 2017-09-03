var app = angular.module("myApp", []);

/*app.service('sharedProperties', function() {
    var objectValue = ['Hero', 'Neutral', 'Villain'];

    return {
        getObject: function() {
            return objectValue;
        },
        setObject: function(arrayData) {
            objectValue = arrayData;
        }
    }
});

app.controller('myController1', function($scope, $timeout, sharedProperties) {
    $scope.stringValue = sharedProperties.getString();
    $scope.objectValue = sharedProperties.getObject().data;
});

app.controller('myController2', function($scope, sharedProperties) {
    $scope.stringValue = sharedProperties.getString;
    $scope.objectValue = sharedProperties.getObject();
    $scope.setString = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setString(newValue);
    };
    $scope.setObject = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setObject(newValue);
    };
});
*/
