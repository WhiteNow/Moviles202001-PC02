Number = function(game, position){
	Phaser.Sprite.call(this,game,position.x,position.y,'numbers');
	this.game = game;
	
	this.anchor.setTo(0.5);	
	let frame = this.game.rnd.integerInRange(0, 9);
	console.log(frame);
	this.frame = frame;
	this.in()
	this.game.add.existing(this);
}

Number.prototype = Object.create(Phaser.Sprite.prototype);
Number.prototype.constructor = Number;

Number.prototype.in = function() {
	let initialTween = this.game.add.tween(this).to( { x: this.game.world.centerX, y: this.y }, 1000, "Sine.easeInOut", true);
}

Number.prototype.out = function() {
	let finalTween = this.game.add.tween(this).to( { x: -50, y: this.y }, 1000, "Sine.easeInOut", true);
}
