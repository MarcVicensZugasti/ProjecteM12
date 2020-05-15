class FinalScene extends Phaser.Scene {
    constructor() {
        super({ key: 'pantallaFinal' })
    }

    init(props) {
    const { level = 5 } = props
    this.nivellActual = level
    }


     create() {

        var cartellJoc = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "lastGraveCartell").setDepth(1);
        cartellJoc.scaleX = 3;
        cartellJoc.scaleY = 3;


        var fonsNit = this.add.image(400, 300, "nitDesert");
        fonsNit.scaleX = 2;
        fonsNit.scaleY = 2;

        var fonsWinner = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "winner").setDepth(1);
        fonsWinner.scaleX = 2;
        fonsWinner.scaleY = 2;

        let playButton = this.add.image(400,400,"play_button");
        
        playButton.setInteractive();

        //Crearem l'sprite que volem al costat dels botons del menú.
        let hoverSprite = this.add.sprite(100, 100, "dinosaureBasic");
        hoverSprite.setScale(1.5);
        hoverSprite.setVisible(false);

        //Música menú
        this.sound.pauseOnBlur = false;
        this.sound.play("musicaMenu", {
            loop: true,
            volume: 0.2,
            mute: false
        });

        this.anims.create({
        key: "dinosaureRunning",
        frames: this.anims.generateFrameNumbers("runningDino"),
        frameRate: 10,
        repeat: -1,
        });

        playButton.on("pointerover", () => {
            hoverSprite.setVisible(true);
            hoverSprite.play("dinosaureRunning"); 
            hoverSprite.x = playButton.x - playButton.width;
            hoverSprite.y = playButton.y;
        })

        playButton.on("pointerout", () => {
            hoverSprite.setVisible(false);
        })

        playButton.on("pointerup", () => {
            this.scene.start("jugarAlJoc");
        })

    }
    update(){
    }

    }