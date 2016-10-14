angular.module('root', ['services', 'filters', 'ngResource'])
	.config(['noteProvider', function(noteProvider) { // USED FOR PROVIDER RECIPE
		noteProvider.setText('Hello world!');
	}])
	.controller('indexCtrl', ['$scope', 'message', 'square', 'multiplier', 'note', 'constantText', '$resource', 
		function($scope, message, square, multiplier, note, constantText, $resource) {		
		$scope.favoriteWord, $scope.favoriteColor, $scope.favoriteShape;	// USED FOR TWO-WAY BINDING EXAMPLE	
		$scope.value = 1;	// USED FOR CSS CLASSES BINDING EXAMPLE
		$scope.isBold = function() {
			return $scope.value % 2 === 0;
		};
		$scope.isItalic = function() {
			return $scope.value % 3 === 0;
		};
		$scope.isUnderlined = function() {
			return $scope.value % 5 === 0;
		};
		$scope.products = [		// USED FOR REPEATERS EXAMPLE
			{id: 1, name: "MongoDB"},
			{id: 2, name: "ExpressJS"},
			{id: 3, name: "AngularJS"},
			{id: 4, name: "NodeJS"}
		];		
		$scope.isFirstElemtnVisible = $scope.isSecondElementVisible = true;		// USED FOR VISIBILITY EXAMPLE
		$scope.message = message; // USED FOR VALUE RECIPE
		$scope.factoryProduct = square; // USED FOR FACTORY RECIPE
		$scope.serviceProduct = multiplier.multiply(2); // USED FOR SERVCICE RECIPE
		$scope.note = note.text; // USED FOR PROVIDER RECIPE
		$scope.constantText = constantText; // USED FOR CONSTANT RECIPE
		$scope.$watch('factor', function(newValue) { // USED FOR $watch
			$scope.product = newValue * 2;
		});
		$scope.factor = 6;
		var users = $resource("http://www.learn-angular.org/ResourceLesson/Users/:id"); // USED FOR Ajax $RESOURCE EXAMPLE
		$scope.getUser = function () {
			$scope.user = users.get({id: 1});
		};
		$scope.postUser = function () {
			var response = $scope.user.$save(function () {
				alert("User saved!");
			});
		};
	}]);

