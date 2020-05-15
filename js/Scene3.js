class Scene3 extends Phaser.Scene{
	constructor(){
		super({ key: 'jugarAlJoc2' })
	}
    init(props) {
    const { level = 3 } = props
    this.nivellActual = level
    }
    
	create(){

		//Crearem els fons del joc amb la unió de 5 imatges i el seu escalat.

        var fons6 = this.add.image(400,300,"6");
        fons6.scaleX = 3;
        fons6.scaleY = 4.2;

        var fons9 = this.add.image(400,300,"9");
        fons9.scaleX = 3;
        fons9.scaleY = 4.2;

        var fons7 = this.add.image(400,300,"7");
        fons7.scaleX = 3;
        fons7.scaleY = 4.2;

        //Afegirem les plataformes del primer nivell.
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(800, 610, "terraDos").setScale().refreshBody();
        this.platforms.create(470, 500, "plataforma2nLvl").setScale().refreshBody();
        this.platforms.create(250, 430, "plataforma2nLvl").setScale().refreshBody();

        this.mur1 = this.physics.add.staticGroup();
        this.mur1.create(0, 590, "murInvisible1").setScale(2);

        this.mur2 = this.physics.add.staticGroup();
        this.mur2.create(815, 590, "murInvisible1").setScale(2);

        this.mur3 = this.physics.add.staticGroup();
        this.mur3.create(400, 450, "murInvisibleSmall2").setScale(1);

        //450
        this.mur6 = this.physics.add.staticGroup();
        this.mur6.create(550, 450, "murInvisibleSmall2").setScale(1);

        this.mur4 = this.physics.add.staticGroup();
        this.mur4.create(180, 380, "murInvisibleSmall2").setScale(1);

        this.mur5 = this.physics.add.staticGroup();
        this.mur5.create(340, 380, "murInvisibleSmall2").setScale(1);

        this.contador = 0;

        //Afegim el personatge principal del joc.
        this.player = this.physics.add.sprite(150, 500, "personatgeQuiet");
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(280);
        this.physics.add.collider(this.player, this.platforms);

        //Habilitar funcions del teclat.
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            
        this.sound.mute = true;

        //Afegim el grup de projectils.    
        this.projectiles = this.add.group();

        //Afegim la imatge del cor inicial per treure d'ell les animacions
        this.vidaImatge = this.physics.add.sprite(18, 40, "corIndividual");
        this.vidaImatge.body.setAllowGravity(false);
        this.vidaImatge.setCollideWorldBounds(true);

        //Les dues animacions de l'enemic, una per cada direcció.
        this.anims.create({
        key: "dinosaureGroc",
        frames: this.anims.generateFrameNumbers("dinosaureDreta"),
        frameRate: 15,
        repeat: -1,
        });

        this.anims.create({
        key: "dinosaureGrocCanvi",
        frames: this.anims.generateFrameNumbers("dinosaureEsquerra"),
        frameRate: 15,
        repeat: -1 
        });

        //El generador d'enemics.
        this.enemy = this.physics.add.group();
        var maxEnemics = 4;
        for (var i = 0; i <= maxEnemics; i++){
            var enemic = this.physics.add.sprite(20, 22, "dinosaureDreta");
            this.enemy.add(enemic);
            enemic.setRandomPosition(0, 0, this.game.config.width, this.game.config.height > 60);
            enemic.play("dinosaureGroc");
            enemic.setVelocity(50, 100);
            enemic.setCollideWorldBounds(true);
            enemic.setBounce(0);
            enemic.setScale(1);
        }

        //Afegim les noves colisions.
        this.physics.add.collider(this.enemy, this.platforms);  

        this.physics.add.overlap(this.projectiles, this.enemy, this.hitEnemy, null, this);

        this.physics.add.overlap(this.player, this.enemy, this.hurtPlayer, null, this);

        this.physics.add.overlap(this.enemy, this.mur1, this.enemyTurnsRight, null, this);
        this.physics.add.overlap(this.enemy, this.mur2, this.enemyTurnsLeft, null, this);
        this.physics.add.overlap(this.enemy, this.mur3, this.enemyTurnsRight, null, this);
        this.physics.add.overlap(this.enemy, this.mur4, this.enemyTurnsRight, null, this);
        this.physics.add.overlap(this.enemy, this.mur5, this.enemyTurnsLeft, null, this);
        this.physics.add.overlap(this.enemy, this.mur6, this.enemyTurnsLeft, null, this);

        //Crearem la puntuació.
        this.puntuacio = 0;
        this.etiquetaPuntuacio = this.add.bitmapText(10, 5, "pixelFont", "PUNTUACIO ", 20);

        this.vida = 5; 

        this.initialTime = 0;
        this.text = this.add.bitmapText(10, 18, "pixelFont", 'TEMPS: ' + this.formatTime(this.initialTime), 20);
        var timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true});
    }

    //Detectar la colisió entre el projectil i l'enemic.
    hitEnemy(projectil, enemic, contador) {
        var explosion = new Explosion(this, enemic.x, enemic.y);
        enemic.destroy();
        projectil.destroy();
        this.puntuacio += 15;
        var puntuacioFormatejada = this.zeroPad(this.puntuacio, 3);
        this.etiquetaPuntuacio.text = "PUNTUACIO " + puntuacioFormatejada;
        this.contador += 1;
    }

    formatTime(seconds){
        var minutes = Math.floor(seconds / 60);
        var partInSeconds = seconds % 60;
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        return `${minutes}:${partInSeconds}`
    }

    onEvent(){
        this.initialTime += 1;
        this.text.setText('TEMPS: ' + this.formatTime(this.initialTime));
    }

    enemyTurnsRight(enemic){
        enemic.setVelocityX(70);
        enemic.flipX = false;
    }

    enemyTurnsLeft(enemic){
        enemic.setVelocityX(-70);
        enemic.flipX = true;
    }

    //Fer apareixer el personatge a la posició inicial quan impacta físicament amb un enemic.
    resetPlayer(){
        var x = this.game.config.width / 2 - 8;
        var y = this.game.config.height + 64;
        this.player.enableBody(true, x, y, true, true);
        this.player.alpha = 0.5;
        var tween = this.tweens.add({
            targets: this.player,
            y: this.game.config.height - 64,
            ease: 'Power1',
            duration: 1500,
            repeat: 0,
            onComplete: function(){
                this.player.alpha = 1;
            },
            callbackScope: this
        });        
    }

    //Impacte directe del jugador amb un enemic.
    hurtPlayer(player, enemic) {
        this.resetPlayerPos(player);
        if(this.player.alpha < 1){
            return;
        }
        player.disableBody(true, true);
        this.resetPlayer();
        this.time.addEvent({
            delay: 1000,
            callback: this.resetPlayer,
            callbackScope: this,
            loop: false
        });

        //Creació d'un text sota la puntuació que ens permet veure la vida que té el player.
        this.vida -= 1;
        var vidaFormatejada = this.zeroPad(this.vida, 1);

        //Animació del factor 'vida'.
        if(vidaFormatejada == 4){
            this.vidaImatge.play("corsVida1");
        }else if(vidaFormatejada == 3){
            this.vidaImatge.play("corsVida2");
        }else if(vidaFormatejada == 2){
            this.vidaImatge.play("corsVida3");
        }else if(vidaFormatejada == 1){
            this.vidaImatge.play("corsVida4");
        }

        //Acabar la partida si les vides arriben a 0.
        if(vidaFormatejada == 0){
            this.vidaImatge.play("corsVida5");
            this.physics.pause();
            this.game.gameOver = true;
            this.scene.start('gameoverFinal');
        }
    }


    //Crear la numeració de la puntuació.
    zeroPad(number, size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
            stringNumber = "0" + stringNumber;
        }
        return stringNumber;
    }
    
    update() {

    //Moviment del personatge que configurem a movePlayerManager.
    this.movePlayerManager();

    if (this.contador == 5){
        this.scene.start('jugarAlJoc3', {puntuacio: this.puntuacio, vida: this.vidaFormatejada});
    }

    if(this.cursorKeys.left.isDown && Phaser.Input.Keyboard.JustDown(this.spacebar)){
        if(this.player.active){
        this.dispararFoc();
    }
    }

    if(this.cursorKeys.right.isDown && Phaser.Input.Keyboard.JustDown(this.spacebar)){
        if(this.player.active){
        this.dispararFoc2();
    }
    }
    
    //Generem els projectils per l'esquerra.
    for(var i = 0; i < this.projectiles.getChildren().length; i++){
        var foc = this.projectiles.getChildren()[i];
        var foc2 = this.projectiles.getChildren()[i];
        foc.update();
        foc2.update();
    }

    //Fi de l'Update.
    }
    
    resetPlayerPos(player) {
        player.x = 150;
    }

    //Disparar cap a la dreta.
    dispararFoc2(){
        var foc2 = new Foc2(this);
    }

    //Disparar cap a l'esquerra.
    dispararFoc(){
        var foc = new Foc(this);
    }

    //Configuració del moviment del personatge.
    movePlayerManager(){

    if (this.cursorKeys.left.isDown){
        this.player.setVelocityX(-160);
        this.player.anims.play("left", true);
    }
    else if (this.cursorKeys.right.isDown){
        this.player.setVelocityX(160);
        this.player.anims.play("right", true);
    }
    else{
        this.player.setVelocityX(0);
        this.player.anims.play("turn", true); 
    }
    if (this.cursorKeys.up.isDown && this.player.body.touching.down){
        this.player.setVelocityY(-330);
        this.player.setVelocityX(100);
    }

    }
}

 