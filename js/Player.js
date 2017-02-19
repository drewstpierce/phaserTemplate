var Player = function(game, x, y, key, hp) {
    Phaser.Sprite.call(this, game, x, y, key);

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.anchor.setTo(0.5, 0.5);
        this.game.enableBody = true;
        this.body.setSize(10, 10, 16, 21);
        this.body.allowRotation = false;
        this.key = 'key';
        this.hp = hp;
        this.collideWorldBounds = true;
    };

// Followers are a type of Phaser.Sprite
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

    Player.prototype.update = function() {
          this.body.velocity.x = 0;
          this.body.velocity.y = 0;

        if (upKey.isDown) {
            this.body.velocity.y = -175;
        } else if (downKey.isDown) {
            this.body.velocity.y = 175;
        } 
        if (leftKey.isDown) {
            this.body.velocity.x = -175;
        } else if (rightKey.isDown) {
            this.body.velocity.x = 175;
        }
};