Preload = function(game){}

Preload.prototype = {
	preload : function(){
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;

		this.load.image("gameTitle", "assets/images/gametitle.png")
		this.load.image("gameOver", "assets/images/gameover.png")
		this.load.image("higher", "assets/images/higher.png")
		this.load.image("lower", "assets/images/lower.png")
		this.load.image("play", "assets/images/play.png")

		this.load.spritesheet("numbers", "assets/images/numbers.png",100,100,10);
	},
	create:function(){
		this.state.start("Menu");
	}
}