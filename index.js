var createGame = require('voxel-engine');

var game = createGame({
	texturePath: __dirname + 'painterly-textures/textures/'
});

// Attaches the game to a container
var container = document.body;
game.appendTo(container);

// Create a player 
var createPlayer = require('voxel-player')(game);
var dude = createPlayer("dude.jpg");
//Follow player around
dude.possess();
// Move player up in space
dude.yaw.position.set(0,100,0);