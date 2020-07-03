Game = function(game){}

Game.prototype = {
	create:function(){
		
		this.higher = this.add.sprite(0, 0, 'higher');
		this.higher.anchor.setTo(0.5);
        this.higher.x = this.game.world.centerX;
		this.higher.y = this.higher.height/2;
		this.higher.inputEnabled = true;
		this.higher.key = 'higher';
		this.higher.events.onInputDown.add(this.checkNumber, this);

		this.lower = this.add.sprite(0, 0, 'lower');
		this.lower.anchor.setTo(0.5);
        this.lower.x = this.game.world.centerX;
		this.lower.y = this.game.world.bounds.height - this.higher.height/2;
		this.lower.inputEnabled = true;
		this.lower.key = 'lower';
		this.lower.events.onInputDown.add(this.checkNumber, this);
	
		this.number = new Number(this.game, {x: this.world.bounds.width + 100, y: 
			this.game.world.centerY});
		
		
		this.score = 20
	},
	checkNumber: function(sprite) {
		this.randomNum = new Number(this.game, {x: this.world.bounds.width + 100, y: 
			this.game.world.centerY});
		
		switch (sprite.key) {
			case 'higher': {
				if(this.number.frame < this.randomNum.frame) {
					this.score += 10
				} else {
					this.score -= 5
				}
				break;
			}

			case 'lower': {
				if(this.number.frame > this.randomNum.frame) {
					this.score += 10
				} else {
					this.score -= 5
				}
				break;
			}
		}

		console.log("Score: " + this.score);
		this.number.out()
		this.number = this.randomNum
		if (this.score == 0) {
			this.gameOver();
		}
	},
	gameOver: function() {
		this.state.start("GameOver");
	}
}