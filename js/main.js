var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

function preload() {
  game.load.image('sky', 'assets/images/sky.png');
  game.load.image('ground', 'assets/images/platform.png')
  game.load.image('star', 'assets/images/star.png')
  game.load.spritesheet('adam', 'assets/images/adam-walk-sprite-sheet.png', 100, 100, 48)
};

var player;
var platforms;
var cursors;

var stars;
var score = 0;
var scoreText;

function create() {
  game.add.sprite(0, 0, 'sky');

  platforms = game.add.group();

  platforms.enableBody = true;

  var ground = platforms.create(0, game.world.height - 64, 'ground');

  ground.scale.setTo(2, 2);

  ground.body.immovable = true;

  var ledge = platforms.create(400, 400, 'ground');

  ledge.body.immovable = true;

  ledge = platforms.create(-150, 250, 'ground');

  ledge.body.immovable = true;

  player = game.add.sprite(32, game.world.height - 180, 'adam');

  game.physics.arcade.enable(player);

  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldsBounds = true;

  player.animations.add('walk', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], 24, true);

  cursors = game.input.keyboard.createCursorKeys();

  // adam = game.add.sprite(game.world.centerX, game.world.centerY, "adam-sprite-walk");
  // adam.anchor.setTo(0.5, -0.1);
  // adam.scale.setTo(1, 1)
  // adam.animations.add('walk');
  // adam.play("walk", 24, true);
};

function update() {
  var hitPlatform = game.physics.arcade.collide(player, platforms)

  player.body.velocity.x = 0;

  if (cursors.right.isDown) {
    player.scale.setTo(1, 1)
    player.body.velocity.x = 150;

    player.animations.play('walk');
  }
  else if (cursors.left.isDown) {
    player.scale.setTo(-1, 1);
    player.body.velocity.x = -150;

    player.animations.play('walk');
  }

  else {
    player.animations.stop();

    player.frame = 1;
  }

};

