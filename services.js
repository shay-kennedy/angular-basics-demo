angular.module('services', [])
	.value('message', 'Hello world!') // USED FOR VALUE RECIPE
	.value('factor', 6) // USED FOR FACTORY RECIPE
	.factory('square', ['factor', function(factor) { 
		return factor * factor;
	}])
	.service('multiplier', ['factor', Multiplier]) // USED FOR SERVICE RECIPE
	.provider('note', [function() { // USED FOR PROVIDER RECIPE
		var text = null;
		this.setText = function(textString) {
			text = textString;
		};
		this.$get = [function() {
			return new Note(text);
		}];
	}])
	.constant('constantText', 'Hello constant!');
