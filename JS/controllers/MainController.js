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

// Discard Toggle filter---------------------------------

  // Fruits
  $scope.discards = ['Card', 'Support', 'Upgrade'];

  // Selected fruits
  $scope.discardsSelection = ['Card'];

  // Toggle selection for a given fruit by name
  $scope.toggleDiscardsSelection = function toggleDiscardsSelection(discardName) {
    var idx = $scope.discardsSelection.indexOf(discardName);

    // Is currently selected
    if (idx > -1) {
      $scope.discardsSelection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.discardsSelection = [];
      $scope.discardsSelection.push(discardName);
        $scope.setObject = function(newValue) {
        $scope.objectValue.data = newValue;
        sharedProperties.setObject(newValue);
        };
    }
  };




// ---------------------------------

//set the values up for passing checkboxes
    $scope.checkboxModel = {
       OnlySides : false,
       DieSidesOnOff : true,
       ResourceCosted : false,
       NotResourceCosted : false
     };


    $scope.checkboxChange = function() {
        //if ($scope.checkboxModel.ResourceCosted == false){
        $scope.checkboxModel.NotResourceCosted = false;
        //}
      };

    $scope.checkboxChange2 = function() {
        //if ($scope.checkboxModel.NotResourceCosted == false){
        $scope.checkboxModel.ResourceCosted = false;
        //}
      };

    //define toggle variables
    //$scope.dropdownNames = ["=", "<", ">"];

    $scope.dropdownOperators = {
        availableOptions: [
          {id: '1', name: '>='},
          {id: '2', name: '<='},
          {id: '3', name: '='}
        ],
        selectedOption: {id: '1', name: '='} //This sets the default value of the select in the ui
    };

    $scope.dropdownCardCategory = {
        availableOptions: [
          {id: '1', name: 'Discard'},
          {id: '2', name: 'Dice'},
          {id: '3', name: 'Shield'},
          {id: '4', name: 'Keyword'},
          {id: '5', name: 'Action Cheat'},
          {id: '6', name: 'Damage'},
          {id: '7', name: 'Cost Manipulation'},
          {id: '8', name: 'Interrupt'},
          {id: '9', name: 'Hand Reveal'},
          {id: '10', name: 'Card Manipulation'},
          {id: '11', name: 'Draw and Deck Search'},
          {id: '12', name: 'Resource'},
          {id: '13', name: 'Battlefield'}

        ],
        selectedOption: {id: '1', name: 'Discard'} //This sets the default value of the select in the ui
    };





//console.log("DieSidesOnOff = " + $scope.checkboxModel.DieSidesOnOff);
//console.log("ResourceCosted = " + $scope.checkboxModel.ResourceCosted);



}]);



app.filter('nameContains', function () {
  return function (items, searchString) {
    //console.log("switch");
    var filtered = [];
    var stringMatch = new RegExp(searchString, 'i');
    if (undefined !== items && items.length) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (stringMatch.test(item.name)) {
            filtered.push(item);
          }
        }
    }
    return filtered;
  };
});

/*app.filter('categoryIs', function () {
  return function (items, searchCategory) {
    var filtered = [];
    var stringMatch = new RegExp(searchCategory, 'i');
    if (undefined !== items && items.length) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (stringMatch.test(item.category)) {
            filtered.push(item);
          }
        }
    }
    return filtered;
  };
});*/

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
      isTrue = false;

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
      isTrue = false;

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
      isTrue = false;

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
  return function (items, searchSides, checkboxValue, dieSwitch) {
      //console.log("sides var = " + dieSwitch);
    if (dieSwitch == true)  {
    var filtered = [];

    if (checkboxValue == false) {
        var isTrue = false;
        angular.forEach(items, function(item) {
            angular.forEach(searchSides, function(side) {
                var escaped = side.replace(/[^\w\s]/g, "\\$&");
                var stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
                if(item.has_die == true && stringMatch.test(item.sides)) {
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
        var TrueTest = false;
        var resetValue = false;
        //reset the flag variables
        var isTrueA = [];
        var escaped = " ";
        var stringMatch = " ";
        //create an item in the array for each search term
        angular.forEach(searchSides, function (side) {
            isTrueA.push(resetValue);

        });

        //console.log("isTrue array length = " + isTrue.length);

        //console.log("isTrue Array = " + isTrue);


        angular.forEach(items, function (item) {
            angular.forEach(searchSides, function (sSides, indexKey) {
                //console.log("indexKey = " + indexKey);
                 //this replaces any character that is not(^) alphanumeric(\w) or whitespace(\s) with "\\" - The "$&" make's it work for all matches
                escaped = sSides.replace(/[^\w\s]/g, "\\$&");
                stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
                //console.log("stringMatch = " + stringMatch);
                if (item.has_die == true) {

                    angular.forEach(item.sides, function (side) {
                        if (stringMatch.test(side) == true) {
                            //TrueTest = true;
                            //var idx = side.indexOf(side);
                            //console.log("index = " + indexKey);
                            isTrueA[indexKey] = true;
                        }
                    });
                }
            });
//console.log("TEST");





             if (isTrueA.every(function (truth) {
                    //console.log("Result = " + truth);
                    return truth == true;
                    })
                 ) {

                 console.log("This card matches all the sides! " + isTrueA);
                 filtered.push(item);
             }





            /*//now go through the array and check for any false returns
            angular.forEach(isTrue, function (truth) {
                console.log("Result = " + truth);
                if (truth == false) {
                    TrueTest = false;
                }
            });*/

            //final test to see if any of the values returned false
            /*if (TrueTest == true) {
                filtered.push(item);
            }*/

            //VALUE RESET
            TrueTest = false;
            //create an item in the array for each search term
            /*angular.forEach(isTrueA, function (truth) {
                truth = false;
            });*/

            for (var n = 0; n < searchSides.length; n++){
            isTrueA[n] = resetValue;
            //console.log("Variable", isTrue[l])
            }

            console.log("isTrueA = " + isTrueA);

        });
    };
    return filtered;
  }

    else {
        filtered = items;
        return filtered;
    };

};

});

app.filter('sideIsComplexSideValue', function () {
  return function (items, searchSides, checkboxValue, dieSwitch, selectedOption, dieValue, dieSideCount) {
      //console.log("sides var = " + dieSwitch);
    /*if (undefined == dieSideCount)  {
        dieSideCount = 1;
    }*/
    //console.log("dieSideCount = " + dieSideCount);

    if (dieSwitch == true)  {
    var filtered = [];

//-------------------------------------------------


    if (checkboxValue == false && undefined == dieValue) {
        var isTrue = false;
        var matchCount = 0;

        angular.forEach(items, function(item) {
            angular.forEach(searchSides, function(side) {
                var escaped = side.replace(/[^\w\s]/g, "\\$&");
                var stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');


                if (item.has_die == true) {
                    angular.forEach(item.sides, function (DSide) {

                        if(stringMatch.test(DSide)) {
                            isTrue = true;
                            matchCount++;
                            //console.log("matchCount = " + matchCount);
                        }

                    });
                }
            });

            if (matchCount == 0) {
                matchCount = 1;
            }

            if (isTrue == true && matchCount >= dieSideCount) {
                filtered.push(item);
                }
            isTrue = false;
            matchCount = 0;
        });
    }


//-------------------------------------------------


    else if (checkboxValue == false && undefined !== dieValue) { // && dieValue.length for string version
        var isTrue = false;
        var matchCount = 0;
        angular.forEach(items, function(item) {
            angular.forEach(searchSides, function(side) {

                var escaped = side.replace(/[^\w\s]/g, "\\$&");//make the weird characters passable
                var stringMatch = new RegExp(escaped, 'i'); //create the non-case sensitive regexp

                if (item.has_die == true) {
                    angular.forEach(item.sides, function (DSide) {
                        var firstChar = parseInt(DSide.slice(0));//get the first character in a string
                        //console.log("SWITCH " + firstChar + ", " + dieValue);
                        //console.log("selectedOption ID = " + selectedOption.id);

                        switch (selectedOption.id) {
                                //>=
                                case "1":
                                    //console.log("Case 1");
                                    if (stringMatch.test(DSide) == true && firstChar >= dieValue) {
                                        isTrue = true;
                                        matchCount++;
                                        }
                                    break;

                                //<=
                                case "2":
                                    //console.log("Case 2");
                                    if (stringMatch.test(DSide) == true && firstChar <= dieValue) {
                                        isTrue = true;
                                        matchCount++;
                                        }
                                    break;

                                //=
                                case "3":
                                    //console.log("Case 3");
                                    if (stringMatch.test(DSide) == true && firstChar == dieValue) {
                                        isTrue = true;
                                        matchCount++;
                                        }
                                    break;
                                default:
                                    console.log("FAILED SWITCH " + selectedOption.id);

                                    /*if (stringMatch.test(DSide) == true && firstChar == dieValue) {
                                        isTrue = true;
                                        matchCount++;
                                        }*/

                        }

                            /*if (stringMatch.test(DSide) == true && firstChar == dieValue) {
                                isTrue = true;
                            }*/


                    });
                }

                /*if(item.has_die == true && stringMatch.test(item.sides) && firstChar == parseInt(dieValue)) {
                    isTrue = true;
                }*/
            });

            if (matchCount == 0) {
                matchCount = 1;
            }


            if (isTrue == true && matchCount >= dieSideCount) {
                filtered.push(item);
                }
            //console.log("matchCount = " + matchCount + ", dieSideCount = " + dieSideCount);
            isTrue = false;
            matchCount = 0;
        });
    }


        //var firstChar = side.slice(1);
        //!isNaN(firstChar) == true



            /*else if (checkboxValue == false && undefined !== dieValue && dieValue.length) {
        var isTrue = false;
        angular.forEach(items, function(item) {
            angular.forEach(searchSides, function(side) {
                var firstChar = side.slice(1);//get the first character in a string
                var escaped = side.replace(/[^\w\s]/g, "\\$&");//make the weird characters passable
                var stringMatch = new RegExp(escaped, 'i'); //create the non-case sensitive regexp
                //console.log("SWITCH " + firstChar + ", " + dieValue);



                if(item.has_die == true && stringMatch.test(item.sides) && firstChar == parseInt(dieValue)) {
                    isTrue = true;
                }
            });
            if (isTrue == true) {
                filtered.push(item);
                }
              var isTrue = false;
        });
    }*/


  //-------------------------------------------------


    else if (checkboxValue == true && undefined == dieValue) {
        //console.log("checkbox = " + checkboxValue);
        //set the starter flag value
        var TrueTest = false;
        var resetValue = false;
        var resetMatchValue = 0;
        //reset the flag variables
        var isTrueA = [];
        var matchCountA = [];
        var escaped = " ";
        var stringMatch = " ";
        //create an item in the array for each search term
        angular.forEach(searchSides, function (side) {
            isTrueA.push(resetValue);
            matchCountA.push(resetMatchValue);

        });

        //console.log("isTrue array length = " + isTrue.length);

        //console.log("isTrue Array = " + isTrue);


        angular.forEach(items, function (item) {
            angular.forEach(searchSides, function (sSides, indexKey) {
                //console.log("indexKey = " + indexKey);
                 //this replaces any character that is not(^) alphanumeric(\w) or whitespace(\s) with "\\" - The "$&" make's it work for all matches
                escaped = sSides.replace(/[^\w\s]/g, "\\$&");
                stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
                //console.log("stringMatch = " + stringMatch);
                if (item.has_die == true) {

                    angular.forEach(item.sides, function (side) {
                        if (stringMatch.test(side) == true) {
                            //TrueTest = true;
                            //var idx = side.indexOf(side);
                            //console.log("index = " + indexKey);
                            isTrueA[indexKey] = true;
                            matchCountA[indexKey]++;//increase the count for specific search die term
                            //console.log("matchCountA = " + matchCountA[indexKey]);
                        }


                    });
                }
            });
//console.log("TEST");


            //reset any counts if they didn't hit a match - this is accurate
            angular.forEach(matchCountA, function (matchCount) {
                if (matchCount == 0) {
                    matchCount = 1;
                }

            });




             if (isTrueA.every(function (truth) {
                    //console.log("Result = " + truth);
                    return truth == true;
                    })
                 &&

                 matchCountA.every(function (match) {
                    //console.log("Result = " + truth);
                    return match >= dieSideCount;
                    })

                 ) {

                 //console.log("This card matches all the sides! " + isTrueA);
                 filtered.push(item);
             }





            /*//now go through the array and check for any false returns
            angular.forEach(isTrue, function (truth) {
                console.log("Result = " + truth);
                if (truth == false) {
                    TrueTest = false;
                }
            });*/

            //final test to see if any of the values returned false
            /*if (TrueTest == true) {
                filtered.push(item);
            }*/

            //VALUE RESET
            TrueTest = false;
            //create an item in the array for each search term
            /*angular.forEach(isTrueA, function (truth) {
                truth = false;
            });*/

            for (var n = 0; n < searchSides.length; n++){
                isTrueA[n] = resetValue;
                matchCountA[n] = resetMatchValue;

            //console.log("Variable", isTrue[l])
            }

            //console.log("isTrueA = " + isTrueA);

        });
    }


//-------------------------------------------------


    else if (checkboxValue == true && undefined !== dieValue) {
        //console.log("checkbox = " + checkboxValue);
        //set the starter flag value
        var TrueTest = false;
        var resetValue = false;
        var resetMatchValue = 0;
        //reset the flag variables
        var isTrueA = [];
        var matchCountA = [];
        var escaped = " ";
        var stringMatch = " ";
        //create an item in the array for each search term
        angular.forEach(searchSides, function (side) {
            isTrueA.push(resetValue);
            matchCountA.push(resetMatchValue);

        });

        //console.log("isTrue array length = " + isTrue.length);

        //console.log("isTrue Array = " + isTrue);


        angular.forEach(items, function (item) {
            angular.forEach(searchSides, function (sSides, indexKey) {
                //console.log("indexKey = " + indexKey);
                 //this replaces any character that is not(^) alphanumeric(\w) or whitespace(\s) with "\\" - The "$&" make's it work for all matches
                escaped = sSides.replace(/[^\w\s]/g, "\\$&");
                stringMatch = new RegExp(escaped, 'i'); //, '0' new RegExp("[" + side + "]", 'i');
                //console.log("stringMatch = " + stringMatch);
                if (item.has_die == true) {

                    angular.forEach(item.sides, function (side) {
                        var firstChar = parseInt(side.slice(0));//get the first character in a string
                        //console.log("SWITCH " + firstChar + ", " + dieValue);
                        //console.log("selectedOption ID = " + selectedOption.id);

                        switch (selectedOption.id) {
                                //>=
                                case "1":
                                    if (stringMatch.test(side) == true && firstChar >= dieValue) {
                                        //TrueTest = true;
                                        //var idx = side.indexOf(side);
                                        //console.log("index = " + indexKey);
                                        isTrueA[indexKey] = true;
                                        matchCountA[indexKey]++;//increase the count for specific search die term
                                        //console.log("matchCountA = " + matchCountA[indexKey]);
                                    }
                                    break;
                                //<=
                                case "2":
                                    if (stringMatch.test(side) == true && firstChar <= dieValue) {
                                        //TrueTest = true;
                                        //var idx = side.indexOf(side);
                                        //console.log("index = " + indexKey);
                                        isTrueA[indexKey] = true;
                                        matchCountA[indexKey]++;//increase the count for specific search die term
                                        //console.log("matchCountA = " + matchCountA[indexKey]);
                                    }
                                    break;
                                //=
                                case "3":
                                    if (stringMatch.test(side) == true && firstChar == dieValue) {
                                        //TrueTest = true;
                                        //var idx = side.indexOf(side);
                                        //console.log("index = " + indexKey);
                                        isTrueA[indexKey] = true;
                                        matchCountA[indexKey]++;//increase the count for specific search die term
                                        //console.log("matchCountA = " + matchCountA[indexKey]);
                                    }
                                    break;
                                default:
                                    console.log("FAILED SWITCH " + selectedOption.id);
                        }


                    });
                }
            });
//console.log("TEST");


            //reset any counts if they didn't hit a match - this is accurate
            angular.forEach(matchCountA, function (matchCount) {
                if (matchCount == 0) {
                    matchCount = 1;
                }

            });




             if (isTrueA.every(function (truth) {
                    //console.log("Result = " + truth);
                    return truth == true;
                    })
                 &&

                 matchCountA.every(function (match) {
                    //console.log("Result = " + truth);
                    return match >= dieSideCount;
                    })

                 ) {

                 //console.log("This card matches all the sides! " + isTrueA);
                 filtered.push(item);
             }





            /*//now go through the array and check for any false returns
            angular.forEach(isTrue, function (truth) {
                console.log("Result = " + truth);
                if (truth == false) {
                    TrueTest = false;
                }
            });*/

            //final test to see if any of the values returned false
            /*if (TrueTest == true) {
                filtered.push(item);
            }*/

            //VALUE RESET
            TrueTest = false;
            //create an item in the array for each search term
            /*angular.forEach(isTrueA, function (truth) {
                truth = false;
            });*/

            for (var n = 0; n < searchSides.length; n++){
                isTrueA[n] = resetValue;
                matchCountA[n] = resetMatchValue;

            //console.log("Variable", isTrue[l])
            }

            //console.log("isTrueA = " + isTrueA);

        });
    };



    return filtered;
  }

    else {
        filtered = items;
        return filtered;
    };

};

});

app.filter('resourceCostedIs', function () {
  return function (items, resourceSwitch, notResourceSwitch) {
    var filtered = [];
    //console.log("resourceSwitch = " + resourceSwitch);
    //console.log("notResourceSwitch = " + notResourceSwitch);
    if (resourceSwitch == true)  {
        //console.log("Switch is true");
        var isTrue = false;
        angular.forEach(items, function(item) {
            angular.forEach(item.sides, function(side) {
                var lastChar = side.slice(-1);
                //console.log("lastChar = " + lastChar);
                if (item.has_die == true && !isNaN(lastChar) == true) {
                    isTrue = true;
                }
            });
            if (isTrue == true) {
                filtered.push(item);
                }
              isTrue = false;
        });
   return filtered;
  }

  else if (notResourceSwitch == true)  {
        //console.log("Switch is true");
        var isTrue = false;
        angular.forEach(items, function(item) {
            angular.forEach(item.sides, function(side) {
                var lastChar = side.slice(-1);
                //console.log("lastChar = " + lastChar);
                if (item.has_die == true && !isNaN(lastChar) == true) {
                    console.log(isTrue + "Side = " + side + "lastChar = " + lastChar);
                    isTrue = true;
                }
            });
            if (isTrue == false) {
                filtered.push(item);
                }
              isTrue = false;
        });
   return filtered;
  }

  else {
        filtered = items;
        return filtered;
    };


  };
});

app.filter('dieValueIs', function () {
  return function (items, selectedOption, dieValue) {
    var filtered = [];
    console.log("selectedOption = " + selectedOption.name);

    if (undefined !== dieValue && dieValue.length)  {
        //console.log("Switch is true");
        var isTrue = false;
        angular.forEach(items, function(item) {
            angular.forEach(item.sides, function(side) {
                var firstChar = side.slice(1);//maybe should be 0?
                //console.log("lastChar = " + lastChar);

                if (selectedOption.id == 1) {
                    if (item.has_die == true && !isNaN(firstChar) == true) {
                        isTrue = true;
                    }
                }



            });
            if (isTrue == true) {
                filtered.push(item);
                }
              var isTrue = false;
        });
   return filtered;
  }

  else {
        filtered = items;
        return filtered;
    };


  };
});

app.filter('categoryIs', function () {
  return function (items, searchCategory) {

    var filtered = [];
    //console.log("searchCategory = " + searchCategory.name);
    switch (searchCategory.name) {

        case "Discard":
            //console.log("Case 1");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0]);//no modifier to match Discard but not Card
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            //console.log(filtered);
            break;

        case "Dice":
            console.log("Dice");
            angular.forEach(items, function(item) {
                var count = 0;//checking for dupes
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        console.log("MATCH");
                        if (count < 1) {
                            //console.log("Pushed");
                            count++;
                            filtered.push(item);
                        }
                        else {console.log("DUPE")}
                    }
                });
              count = 0;
            });

            break;

        case "Shield":
            console.log("Shield");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Keyword":
            console.log("Keyword");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Action Cheat":
            console.log("Action");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Damage":
            console.log("Damage");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Interrupt":
            console.log("Restriction");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Hand Reveal":
            console.log("Hand");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Card Manipulation":
            console.log("Card");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Draw and Deck Search":
            console.log("Draw");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Cost Manipulation":
            console.log("Cost");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Resource":
            console.log("Cost");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        case "Battlefield":
            console.log("Cost");
            angular.forEach(items, function(item) {
                angular.forEach(item.abilityCategory, function(cat) {
                    //console.log("Cat = " + cat);
                    var splitString = cat.split(" ");
                    //console.log("Splitstring = " + splitString[0]);
                    //console.log(splitString[0] + " VS " + searchCategory.name);
                    var stringMatch = new RegExp(splitString[0], 'i');
                    if (stringMatch.test(searchCategory.name)) {
                        //console.log("MATCH");
                        filtered.push(item);
                    }
                });
            });
            break;

        default:
            console.log("FAILED SWITCH");

            /*if (stringMatch.test(DSide) == true && firstChar == dieValue) {
                isTrue = true;
                matchCount++;
                }*/

    }



    return filtered;
  };
});













