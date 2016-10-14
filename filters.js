angular.module('filters', [])
	.filter('round', function() {
		return function(input, precision) {
			return input ? parseFloat(input).toFixed(precision) : '';
		};
	})
	.filter('dollars', function() {
		return function(input) {
			return input ? '$' + input : '';
		};
	});