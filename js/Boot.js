var Game = {
    
    
};
   
Game.Boot = function(game) {
    
};

Game.Boot.prototype = {
    init:function() {
        
    },
    
    preload:function(){
        /* A preload bar is entirely optional, and though most 
        browsers will skip past it, it's a good way of letting
        players know that the game is in fact loading and not 
        broken in the event you end up with a lot of assets that
        need preloading. */
        this.load.image('preloadBar', 'assets/preloadBar.png');
        
    },
    
    create:function() {
         /* Scaling option for making the image fit the whole screen 
         of the device being used. */
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // Load the physics.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        /* This is mostly used for pixel art games, so remove it
        if you're using larger sprites that need interpolation. */
        this.game.renderer.renderSession.roundPixels = true;  
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)  
        /* Make sure everything is in the window. You sould be able
        to do away with this is if you don't want it fitting to the
        size of the browser window (in which case you'll probably
        be doing away with the scaling option at the top of this function).
        */     
        this.stage.disableVisibilityChange = true;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader');
    
    }
    
};


