
var GameState = {
  preload: function() {
    game.load.image('background', 'assets/images/test-bg.png');
    // this.load.image('adam', 'assets/images/adam-test.png');
    game.load.spritesheet('adam-sprite', 'assets/images/adam-sprite-sheet_02.png', 100, 100, 96)
  },
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');

    // this.adam = this.game.add.sprite(this.game.world.centerX, this.game.world.CenterY, 'adam');
    // this.adam.anchor.setTo(0.5, -0.3)
    this.adamsprite=game.add.sprite(500, 235, "adam-sprite");
    this.adamsprite.animations.add('idle', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], 7, true);
    this.adamsprite.animations.add('walk', [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80], 24, true);
    this.adamsprite.play("walk");
    // [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]
  },
  update: function() {

  }
};

var game = new Phaser.Game(1080, 432, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
