var Square = (function() {

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

	function addEvents(square){
		square.element.addEventListener("click", function(e){
			if(this.innerText !== "F"){
				square.reveal(true);
			}
		});
		square.element.addEventListener("mousedown", function(e){
			e.preventDefault();
			if(e.which == 3) {
				square.chooseToSetOrResetBombFlag();
			}

		});
	}

	var Square = function(position, isBomb, id){
		this.position = position;
		this.reveald = false;
		this.bombFlag = false;
		this.neighbors = [];
		this.bombsAround = 0;
		this.isBomb = isBomb;
		this.element = document.createElement('button');
		this.element.id = id;
		addEvents(this);
	};

	Square.prototype.getX = function() {
		return this.position.coordX;
	};

	Square.prototype.getY = function() {
		return this.position.coordY;
	};

	Square.prototype.setNeighbors = function(gridSquares) {
		var that = this;
		function filterNeighbors(el){
			return areNeighbors(el,that);
		}
		this.neighbors = gridSquares.filter(filterNeighbors);
	};

	Square.prototype.setNumberOfBombsAround = function() {
		var bombs = this.neighbors.filter(function(el) {
			return el.isBomb;
		});
		this.bombsAround  = bombs.length;
	};

	//to be called only if element is enabled
	Square.prototype.reveal = function(isFirstCaller) {
		if(!this.element.disabled){

			if(this.isBomb && isFirstCaller){
				//evento de game over
				this.element.innerText = "B";
				return;
			}

			if(this.isBomb && !isFirstCaller){
				//do nothing
				return;
			}

			if(!this.reveald) {
				this.reveald = true;
				this.element.disabled = true;
				this.element.innerText = this.bombsAround;

				if(!this.isBomb && this.bombsAround ===0) {
					this.neighbors.forEach(function(el){
						el.reveal(false);
					});
				}
			}
		}

	};

	Square.prototype.chooseToSetOrResetBombFlag = function() {
		if(!this.reveald){
			if(this.bombFlag)
				this.resetBombFlag();
			else
				this.setBombFlag();
		}
	};

	Square.prototype.setBombFlag = function() {
			this.bombFlag = true;
			this.element.disabled = true;
			this.element.innerText = "F";
	};

	Square.prototype.resetBombFlag = function(){
			this.bombFlag = false;
			this.element.disabled = false;
			this.element.innerText = "";
	};

	Square.clear = function() {
		this.reveald = false;
			
	};

	return Square;


})();