class OptionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'opcions' })
    }

    init(props) {
    const { level = 1 } = props
    this.nivellActual = level
    }

    create() {

        var fonsNit = this.add.image(400, 300, "nitDesert");
        fonsNit.scaleX = 2;
        fonsNit.scaleY = 2;

        var cartellJoc = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "lastGraveCartell").setDepth(1);
        cartellJoc.scaleX = 3;
        cartellJoc.scaleY = 3;

        var controlsJoc = this.add.image(400, 300, "controlsJoc");
        controlsJoc.scaleX = 3;
        controlsJoc.scaleY = 3;

        let playButton = this.add.image(400, 500, "play_button").setDepth(1);
        playButton.setInteractive();

        let hoverSprite = this.add.sprite(100, 100, "dinosaureBasic");
        hoverSprite.setScale(1.5);
        hoverSprite.setVisible(false);

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