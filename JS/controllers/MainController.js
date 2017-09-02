app.filter('nameContains', function () {
  return function (items, searchString) {
    var filtered = [];
    var stringMatch = new RegExp(searchString, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (stringMatch.test(item.name)) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});

app.filter('categoryIs', function () {
  return function (items, searchCategory) {
    var filtered = [];
    var stringMatch = new RegExp(searchCategory, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (stringMatch.test(item.category)) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});

app.filter('affiliationIs', function () {
  return function (items, searchAffiliation) {
    var filtered = [];
    var isTrue = false;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        for (var j = 0; j < searchAffiliation.length; j++) {
            //var currentObject = searchAffiliation[j];
            var stringMatch = new RegExp(searchAffiliation[j], 'i');
            if (stringMatch.test(item.affiliation_name)) {
                isTrue = true;
        }
      }

      if (isTrue == true) {
                filtered.push(item);
        }
      var isTrue = false;

    }
    return filtered;
  };
});

app.filter('typeIs', function () {
  return function (items, searchType) {
    var filtered = [];
    var isTrue = false;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        for (var j = 0; j < searchType.length; j++) {
            var stringMatch = new RegExp(searchType[j], 'i');
            if (stringMatch.test(item.type_name)) {
                isTrue = true;
        }
      }

      if (isTrue == true) {
                filtered.push(item);
        }
      var isTrue = false;

    }
    return filtered;
  };
});

app.filter('colourIs', function () {
  return function (items, searchColour) {
    var filtered = [];
    var isTrue = false;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        for (var j = 0; j < searchColour.length; j++) {
            var stringMatch = new RegExp(searchColour[j], 'i');
            if (stringMatch.test(item.faction_code)) {
                isTrue = true;
        }
      }

      if (isTrue == true) {
                filtered.push(item);
        }
      var isTrue = false;

    }
    return filtered;
  };
});



app.controller('MainController', ['$scope', '$http', function($scope, $http) {

    $http.get('js/card-list.json')
       .then(function(response) {
        //First function handles success
        $scope.cardlist = response.data;
    }, function(response) {
        //Second function handles error
        $scope.errorHandlerReturn = "Something went wrong";
    });

  $scope.purpose = 'Discard';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{
    	name: 'The Book of Trees',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/the-book-of-trees.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Program or be Programmed',
    	price: 8,
    	pubdate: new Date('2013', '08', '01'),
    	cover: 'img/program-or-be-programmed.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Harry Potter & The Prisoner of Azkaban',
    	price: 11.99,
    	pubdate: new Date('1999', '07', '08'),
    	cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Ready Player One',
    	price: 7.99,
    	pubdate: new Date('2011', '08', '16'),
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    	likes: 0,
    	dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};

// Affiliation Toggle filter---------------------------------

  // Fruits
  $scope.affiliations = ['Hero', 'Neutral', 'Villain'];

  // Selected fruits
  $scope.selection = ['Hero', 'Neutral'];

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

// Type Toggle filter---------------------------------

  // Fruits
  $scope.types = ['Battlefield', 'Character', 'Event', 'Support', 'Upgrade' ];

  // Selected fruits
  $scope.typesSelection = ['Battlefield', 'Character'];

  // Toggle selection for a given fruit by name
  $scope.toggleTypesSelection = function toggleTypesSelection(typeName) {
    var idx = $scope.typesSelection.indexOf(typeName);

    // Is currently selected
    if (idx > -1) {
      $scope.typesSelection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.typesSelection.push(typeName);
        $scope.setObject = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setObject(newValue);
        };
    }
  };

// Colour Toggle filter---------------------------------

  // Fruits
  $scope.colours = ['Red', 'Blue', 'Yellow', 'Grey'];

  // Selected fruits
  $scope.coloursSelection = ['Red', 'Blue'];

  // Toggle selection for a given fruit by name
  $scope.toggleColoursSelection = function toggleColoursSelection(colourName) {
    var idx = $scope.coloursSelection.indexOf(colourName);

    // Is currently selected
    if (idx > -1) {
      $scope.coloursSelection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.coloursSelection.push(colourName);
        $scope.setObject = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setObject(newValue);
        };
    }
  };



}]);
