Menu = function(game){}

Menu.prototype = {
	create:function(){
		this.gameTitle = this.add.sprite(0, 0, 'gameTitle');
		this.gameTitle.anchor.setTo(0.5);
        this.gameTitle.x = this.game.world.centerX;
		this.gameTitle.y = this.gameTitle.height/2;
		
		this.playButton = this.add.sprite(0, 0, 'play');
		this.playButton.anchor.setTo(0.5);
        this.playButton.x = this.game.world.centerX;
        this.playButton.y = this.world.bounds.height - this.playButton.height/2;
		this.playButton.inputEnabled = true;
        this.playButton.events.onInputDown.add(this.startGame, this);
	},
	startGame:function(){
		this.state.start("Game");
	},
}