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
  $scope.colours = ['Red', 'Blue', 'Yellow', 'Gray'];

  // Selected fruits
  $scope.coloursSelection = ['Red', 'Blue', 'Gray'];

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


// Dice Toggle filter---------------------------------

  // Fruits
  $scope.dieSides = [
            "RD",//Ranged Dmage
            "MD",//Melee Damage
            "F",//Focus
            "Dc",//Discard
            "Dr",//Disrupt
            "Sh",//Shield
            "R",//Resource
            "Sp",//Special
            "-",//Blank
            "+"//Modified
        ];

  // Selected fruits
  $scope.sidesSelection = [
            //"RD",//Ranged Dmage
            "+"
        ];

  // Toggle selection for a given fruit by name
  $scope.toggleSidesSelection = function toggleSidesSelection(sideName) {
    var idx = $scope.sidesSelection.indexOf(sideName);

    // Is currently selected
    if (idx > -1) {
      $scope.sidesSelection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.sidesSelection.push(sideName);
        $scope.setObject = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setObject(newValue);
        };
    }
  };


//set the values up for passing checkboxes
    $scope.checkboxModel = {
       OnlySides : false,
       DieSidesOnOff : true
     };






}]);



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

app.filter('sideIs', function () {
  return function (items, searchSides, checkboxValue, dieSwitch) {
      console.log("sides var = " + dieSwitch);
  if (dieSwitch == true)  {
    var filtered = [];

      console.log("sides var = " + searchSides);

    console.log("checkbox = " + checkboxValue);
    //Test for OnlySides filter
    if (checkboxValue == false) {
        //reset the flag variable
        var isTrue = false;
        //run through the different items in the JSON array
        for (var i = 0; i < items.length; i++) {
            //set the individual item
            var item = items[i];
            //run through the selected array and match them against current item
            for (var j = 0; j < searchSides.length; j++) {
                //set the reg express
                var stringMatch = new RegExp(searchSides[j], 'i');
                //console.log(searchSides[j])
                //run through each of the sides within the sides array
                for (var k = 0; k < item.sides.length; k++) {
                    //console.log(item.sides[k])
                    if (stringMatch.test(item.sides[k])) {
                        isTrue = true;
                    }
                }
            }
//console.log("isTrue var = " + isTrue + ", item " + i);
          if (isTrue == true) {
            filtered.push(item);
            }
          var isTrue = false;

        }
      }

    else {
        //set the starter flag value
        var TrueTest = true;
        var resetValue = false;
        //reset the flag variables
        var isTrue = [];
        //create an item in the array for each search term
        for (var l = 0; l < searchSides.length; l++){
            isTrue.push(resetValue);
            //console.log("Variable", isTrue[l])
            }
        //run through the different items in the JSON array
        for (var i = 0; i < items.length; i++) {
            //set the individual item
            var item = items[i];
            //run through the selected array and match them against current item
            for (var j = 0; j < searchSides.length; j++) {
                //set the reg express
                var stringMatch = new RegExp(searchSides[j], 'i');
                //console.log(searchSides[j])
                //run through each of the sides within the sides array
                for (var k = 0; k < item.sides.length; k++) {
                    //console.log(item.sides[k])
                    if (stringMatch.test(item.sides[k])) {
                        isTrue[j] = true;
                    }
                }
            }
          //now go through the array and check for any false returns
          for (var p = 0; p < searchSides.length; p++){
              if (isTrue[p] == false) {
                TrueTest = false;
                }
            }

          //final test to see if any of the values returned false
          if (TrueTest == true) {
            filtered.push(item);
            }

            //VALUE RESET
           //set the starter flag value
        var TrueTest = true;
        //create an item in the array for each search term
        for (var n = 0; n < searchSides.length; n++){
            isTrue[n] = resetValue;
            //console.log("Variable", isTrue[l])
            }


        }//items for end
    }//else end

console.log("filtered = " + filtered);
    return filtered;

   }
  };
});

app.filter('sideIsSimple', function () {
  return function (items, searchSides) {
      //console.log("sides var = " + dieSwitch);
    var filtered = [];
    var isTrue = false;

    angular.forEach(items, function(item) {
        angular.forEach(searchSides, function(side) {
            var escaped = side.replace(/[^\w\s]/g, "\\$&");
            var stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
            if(stringMatch.test(item.sides)) {
                isTrue = true;
            }
        });
        if (isTrue == true) {
            filtered.push(item);
            }
          var isTrue = false;
    });
    return filtered;
    };


/*    console.log("sides var = " + searchSides);
        //reset the flag variable
        var isTrue = false;
        //run through the different items in the JSON array
        for (var i = 0; i < items.length; i++) {
            //set the individual item
            var item = items[i];
            console.log("pre searchSides stop");
            //run through the selected array and match them against current item
            for (var j = 0; j < searchSides.length; j++) {
                //set the reg express
                var stringMatch = new RegExp(searchSides[j], 'i');
                console.log("searhSides var = " + searchSides[j])
                console.log("pre sides length stop");
                //run through each of the sides within the sides array
                for (var q = 0; q < item.sides.length; q++) {
                    console.log("Current Item Sides = " + item.sides[k])
                    if (stringMatch.test(item.sides[k])) {
                        isTrue = true;
                    }
                }
            }
console.log("isTrue var = " + isTrue + ", item " + i);
          if (isTrue == true) {
            filtered.push(item);
            }
          var isTrue = false;

        }




console.log("filtered = " + filtered);
    return filtered;


  };*/
});

app.filter('sideIsComplex', function () {
  return function (items, searchSides, checkboxValue) {
      //console.log("sides var = " + dieSwitch);
    var filtered = [];

    if (checkboxValue == false) {
        var isTrue = false;
        angular.forEach(items, function(item) {
            angular.forEach(searchSides, function(side) {
                var escaped = side.replace(/[^\w\s]/g, "\\$&");
                var stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
                if(stringMatch.test(item.sides)) {
                    isTrue = true;
                }
            });
            if (isTrue == true) {
                filtered.push(item);
                }
              var isTrue = false;
        });
    }

    else {
        //console.log("checkbox = " + checkboxValue);
        //set the starter flag value
        var TrueTest = true;
        var resetValue = false;
        //reset the flag variables
        var isTrue = [];
        //create an item in the array for each search term
        angular.forEach(searchSides, function (side) {
            isTrue.push(resetValue);

        });

        //console.log("isTrue array = " + isTrue);

        //console.log("isTrue Array = " + isTrue);




        angular.forEach(items, function (item) {
            angular.forEach(searchSides, function (side, indexKey) {
                 //this replaces any character that is not(^) alphanumeric(\w) or whitespace(\s) with "\\" - The "$&" make's it work for all matches
                var escaped = side.replace(/[^\w\s]/g, "\\$&");
                var stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
                if (stringMatch.test(item.sides)) {
                    //var idx = side.indexOf(side);
                    //console.log("index = " + indexKey);
                    isTrue[indexKey] = true;
                }
            });
//console.log("TEST");

            //now go through the array and check for any false returns
            angular.forEach(isTrue, function (truth) {
                if (truth == false) {
                    TrueTest = false;
                }
            });

            //final test to see if any of the values returned false
            if (TrueTest == true) {
                filtered.push(item);
            }

            //VALUE RESET
            TrueTest = true;
            //create an item in the array for each search term
            angular.forEach(isTrue, function (truth) {
                truth = resetValue;
            });

        });
    };
    return filtered;
};

});


















