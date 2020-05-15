class Foc2 extends Phaser.GameObjects.Sprite{
	constructor(scene){

		var x = scene.player.x + 16;
		var y = scene.player.y;

		super(scene, x, y, "focDreta");

		//Afegim tot lo creat(foc) a l'escena.
		scene.add.existing(this);

		this.play("dispararDreta");
		scene.physics.world.enableBody(this);
		this.body.velocity.x = 250;
		this.body.velocity.y = 0;
		this.body.setAllowGravity(false);

		scene.projectiles.add(this);

	}
}