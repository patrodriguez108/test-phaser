
var GameState = {
  preload: function() {
    game.load.image('background', 'assets/images/test-bg.png');
    // this.load.image('adam', 'assets/images/adam-test.png');
    game.load.spritesheet('adam-sprite-walk', 'assets/images/adam-walk-sprite-sheet.png', 100, 100, 48)
  },
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');

    // this.adam = this.game.add.sprite(this.game.world.centerX, this.game.world.CenterY, 'adam');
    // this.adam.anchor.setTo(0.5, -0.3)
    // adam = this.adamsprite=game.add.sprite(500, 235, "adam-sprite");
    adam = game.add.sprite(game.world.centerX, game.world.centerY, "adam-sprite-walk");
    adam.anchor.setTo(0.5, -0.1);
    adam.scale.setTo(1, 1)
    adam.animations.add('walk');
    adam.play("walk", 24, true);
  },
  update: function() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      adam.x -= 4;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      adam.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      adam.y -= 4;
    }
  }
};

var game = new Phaser.Game(1080, 432, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
