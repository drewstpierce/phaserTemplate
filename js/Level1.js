
Game.Level1 = function(game) {};
//These variables will be assigned to actual key presses below.
var attackKey;
var leftKey;
var rightKey;
var upKey;
var downKey;

Game.Level1.prototype = {
    /* Like the pervious "create" functions in the earlier states, 
    this executes any and all activity that needs to take place 
    when the game first starts, with respect to the previously
    loaded assets. */
create: function() {
    //Start physics
    this.physics.startSystem(Phaser.Physics.ARCADE);

    /* Run the setUpKeys function. The function itself is called here,
    but it's created after the create function, which we're currently 
    in. */ 
    this.setUpKeys();

    //Initialize player object from our Player.js class/file. 
    player = this.game.add.existing(
    new Player(this.game, this.game.width/2, this.game.height/2, 'player', 6)
    );
},
    
    /* This functioon connects those key variable up top to their actual keys. */
setUpKeys: function() {
        attackKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
    },  

update: function() {
    /* This is the Update Loop. Similar to how we called the setUpKeys function in the "create"
    function above, you'll place any calls to functions created between this
    and the create function here, SO LONG AS YOU WANT THEM TO REPEATE
    MANY, MANY TIMES A SECOND UNTIL THIS STATE IS EXITED. This means that
    things like Boolean logic (true or false) that only returns true
    when a certain condition is met is a fine fit for this space. */
}
    };