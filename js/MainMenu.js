Game.MainMenu = function (game) {

};

Game.MainMenu.prototype = {
    
    create: function () {
        // Create the main menu text, add any images, etc.
        
        this.loadingText = this.add.text(this.game.width/2, this.game.height / 2, "Press Enter to start", { font: "10px monospace", fill: "#fff" });
        this.loadingText.anchor.setTo(0.5, 0.5);
        //Set up Enter key for key press.
        this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        //Go to the next state when Enter key is pressed.
        this.enterKey.onDown.add(this.playGame, this);
    },

    playGame: function () {
        //Pushes us to the Level1 state, starting the game.
        this.state.start('Level1');
    }
};