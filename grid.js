Grid = function(dimension, numberOfBombs) {
	this.dimension = dimension;
	this.numberOfBombs = numberOfBombs;
	this.squares = [];
	this.createSquares();
	this.sortBombs(numberOfBombs);
	this.setSquarePositions();
	this.setSquareSubscribers();
}

Grid.prototype = {
	clear: function() {

	},
	createSquares: function() {

	},
	sortSquares: function() {

	},
	setSquarePositions: function() {

	},
	setSquareSubscribers: function() {

	},
	showAllBombs: function() {

	}
}