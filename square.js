var squareFactory = {
	"create": function(type)
}

(function() {

	function distanceBetweenPoints(point1, point2){
		var distance = Math.sqrt(
		Math.pow(point1.coordX - point2.coordX, 2) + Math.pow(point1.coordY - point2.coordY, 2)
		);
		return distance;	
	}

	function areNeighbors(square1,square2){
		var dist = distanceBetweenPoints(square1.position,square2.position);
		if( dist ==1 || dist == Math.sqrt(2) ){
			return true;
		}
		return false;
	}

	var Square = function(position){
		this.position = position;
		this.reveald = false;
		this.bombFlag = false;
		this.neighbors = [];
		this.bombsAround = 0;
		this.isBomb = false;
	}

	Square.prototype.getX = function() {
		return this.position.coordX;
	}

	Square.prototype.getY = function() {
		return this.position.coordY;
	}

	Square.prototype.setNeighbors = function(gridDimension, gridSquares) {
		var that = this;
		function filterNeighbors(el){
			return areNeighbors(el,that)
		}
		this.neighbors = gridSquares.filter(filterNeighbors(el));
	}

	Square.prototype.setBombsAround = function() {
		throw new Error();
	}

	Square.prototype.reveal = function(){
		throw new Error();
	}

	Square.prototype.setBombFlag = function() {
		this.bombFlag = true;
	}

	Square.prototype.undoBombFlag = function(){
		this.bombFlag = false;
	}


})();