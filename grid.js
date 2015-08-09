(function() {

	var dimension = {dimX:3, dimY:6};

	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	}

	function bombIdsMapping(dimension,numberOfBombs) {
		var bombMap = [];
		var numberOfPositions = dimension.dimX * dimension.dimY;
		var i = 0;
		while (i < numberOfBombs) {
			var randomId = getRandomInt(0, numberOfPositions);
			if(!bombMap[randomId]){
				bombMap[randomId] = true;
				i+=1;	
			}	
		};
		return bombMap;
	}

	Grid = function(dimension, numberOfBombs) {
		this.dimension = dimension;
		this.numberOfBombs = numberOfBombs;
		this.squares = [];
		this.createSquares();
		this.setSquareNeighbors();
		this.setSquarePositions();
		this.setSquareSubscribers();
	}

	Grid.prototype = {
		clear: function() {

		},
		createSquares: function() {
			var position = {};
			var bombMap = bombIdsMapping(this.dimension, this.numberOfBombs);
			for (var j = 0; i < dimY; i++) {
				for (var i = 0; i < dimX; j++) {
					var id = j*dimX + i;
				    position.coordX = i;
				    position.coordY = j;
				    var isBomb = bombMap[id]?true:false;
					this.squares.push(new Square(position, isBomb, id));
				};	
			};
		},
		setSquareNeighbors: function() {
			var that = this;
			this.squares.forEach(function(el) {
				el.setNeighbors(that.dimension,that.squares);
			});	
		},
		setSquareBombsAround: function() {
			var that = this;
			this.squares.forEach(function(el) {
				el.setNumberOfBombsAround();
			});
		},
		showAllBombs: function() {

		}
	}

})()

