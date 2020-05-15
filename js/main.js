window.onload=function()
{
	var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [SceneMain, MenuScene, OptionsScene, Scene2, Scene3, Scene4, FinalScene, GameoverScene],
        render:{
            pixelArt: true
        },
        parent: 'phaser-game',
        physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    }
}
    var game = new Phaser.Game(config);
    }

