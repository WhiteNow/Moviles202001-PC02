window.onload = function(){
    let game =  new Phaser.Game(800,400,Phaser.AUTO);
    game.state.add("Preload",Preload);
    game.state.add("Menu", Menu);
    game.state.add("Game",Game);
    game.state.start("Preload");

}