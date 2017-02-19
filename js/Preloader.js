Game.Preloader = function(game) {
    this.preloadBar = null;
};

Game.Preloader.prototype = {

    //This is where all assets will be loaded.
    preload: function() {
        
    //Load the player sprite
    this.load.spritesheet('player', 'assets/player.png');
    
        },

    //Once the assets are ready to go, the create function runs...
    create: function() {
        //...and sends us to whichever state we've declared, which is the Main Menu in this case.
        this.state.start('MainMenu');
    
    }
};