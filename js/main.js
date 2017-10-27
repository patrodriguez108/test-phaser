var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

function preload() {
  game.load.image('sky', 'assets/images/sky.png');
  game.load.image('ground', 'assets/images/platform.png');
  game.load.image('star', 'assets/images/star.png');
  game.load.spritesheet('adam', 'assets/images/adam-sprite-sheet-02.png', 100, 100, 120);
}

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

  var ledge = platforms.create(400, 450, 'ground');

  ledge.body.immovable = true;

  ledge = platforms.create(-150, 250, 'ground');

  ledge.body.immovable = true;

  player = game.add.sprite(32, game.world.height - 180, 'adam');


  game.physics.arcade.enable(player);

  player.body.bounce.y = 0.1;
  player.body.gravity.y = 700;
  player.body.collideWorldsBounds = true;

  player.animations.add('idle', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 47], 24, true);

  player.animations.add('walk', [48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], 24, true);

  player.animations.add('jump', [83, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119], 24, true);

  stars = game.add.group();

  stars.enableBody = true;

  for (var i = 0; i < 12; i++) {
    var star = stars.create(i * 70, 0, 'star');

    star.body.gravity.y = 6;

    star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }

  scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

  cursors = game.input.keyboard.createCursorKeys();

  player.anchor.setTo(0.5, -0.1);
}

function update() {
  var hitPlatform = game.physics.arcade.collide(player, platforms);

  game.physics.arcade.collide(stars, platforms);

  game.physics.arcade.overlap(player, stars, collectStar, null, this);

  player.body.velocity.x = 0;

  if (cursors.up.isDown) {
    player.animations.play('jump');
  }

  else if (cursors.right.isDown) {
    player.scale.setTo(1, 1);
    player.body.velocity.x = 90;

    player.animations.play('walk');
  }
  else if (cursors.left.isDown) {
    player.scale.setTo(-1, 1);
    player.body.velocity.x = -90;

    player.animations.play('walk');
  }


  else {
    player.animations.play('idle');
  }

  if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -450;
    player.animations.play('jump');
  }

}

function collectStar(player, star) {
  star.kill();

  score += 10;
  scoreText.text = 'Score: ' + score;
}

