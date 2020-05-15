class SceneMain extends Phaser.Scene {
    constructor() {
        super("carregarJoc");
    }

    init(props) {
    const { level = 0 } = props
    this.nivellActual = level
    }

    preload()
    { 
        //PANTALLA INICIAL
        this.load.image("title_bg", "images/menuImages/title_bg.jpg");
        this.load.image("options_button", "images/menuImages/controlsCartell.png");
        this.load.image("play_button", "images/menuImages/play_button.png");
        this.load.image("logo", "images/menuImages/logo.png");

        this.load.image("winner", "images/menuImages/winner.png");
        this.load.image("gameover", "images/menuImages/gameover.png");

        this.load.image("mountain1","images/layers/parallax-mountain-bg.png");
        this.load.image("mountain2","images/layers/parallax-mountain-foreground-trees.png");
        this.load.image("mountain3","images/layers/parallax-mountain-montain-far.png");
        this.load.image("mountain4","images/layers/parallax-mountain-mountains.png");
        this.load.image("mountain5","images/layers/parallax-mountain-trees.png");

        this.load.image("nitDesert", "images/menuImages/finalNight.png");

        this.load.image("dinosaureBasic", "images/sheets/dinosaureBasic.png");

        this.load.image("controlsJoc", "images/controlsJoc.png");

        this.load.audio("musicaMenu", "musica/shuinvy-childhood.mp3");

        this.load.image("lastGraveCartell", "images/menuImages/lastGraveCartell.png");

        //FONS DE NIVELL 1
    	this.load.image("1","images/JungleAssetPack/parallaxbackground/1.png");
        this.load.image("2","images/JungleAssetPack/parallaxbackground/2.png");
        this.load.image("3","images/JungleAssetPack/parallaxbackground/3.png");
        this.load.image("4","images/JungleAssetPack/parallaxbackground/4.png");
        this.load.image("5","images/JungleAssetPack/parallaxbackground/5.png");

        //FONS DE NIVELL 2
        this.load.image("6","images/JungleAssetPack/darkForest/6.png");
        this.load.image("7","images/JungleAssetPack/darkForest/7.png");
        this.load.image("8","images/JungleAssetPack/darkForest/8.png");
        this.load.image("9","images/JungleAssetPack/darkForest/9.png");

        //PLATAFORMES
        this.load.image("plataforma2nLvl","images/plataformesSecondLvl.png");

        this.load.image("terraDos","images/floorSecondLvl.png");
        this.load.image("terra","images/floor.png");
        this.load.image("terraSaltar","images/jumpingFloor.png");

        this.load.image("cartellFull","images/cartellAmbFull.png");

        this.load.image("murInvisibleSmall", "images/murInvisible.png");
        this.load.image("murInvisibleSmall2", "images/murInvisibleSmall.png");

        this.load.image("murInvisible1", "images/murInvisibleAlt.png");

        this.load.spritesheet("personatgeDreta","images/playerRightMovement.png", 
        {frameWidth: 32, frameHeight: 64});

        this.load.spritesheet("personatgeQuiet","images/playerStandingMovement.png", 
        {frameWidth: 32, frameHeight: 64});

        this.load.spritesheet("personatgeEsquerra","images/playerLeftMovement.png", 
        {frameWidth: 32, frameHeight: 64});

        this.load.spritesheet("focEsquerra","images/fire/Iceball_84x9.png", 
        {frameWidth: 84, frameHeight: 9});

        this.load.spritesheet("focDreta","images/fire/Iceball_84x9_Dreta.png", 
        {frameWidth: 84, frameHeight: 8.7});

        this.load.spritesheet("dinosaureDreta","images/sheets/dinoSpriteYellowRight.png",
        {frameWidth: 48, frameHeight: 48});

        this.load.spritesheet("runningDino","images/sheets/runningDino.png", 
        {frameWidth: 48, frameHeight: 48});

        this.load.spritesheet("dinosaureEsquerra","images/sheets/dinoSpriteYellowLeft.png",
        {frameWidth: 48, frameHeight: 48});

        this.load.spritesheet("explosioAnimacio","images/particles/explosionSheet.png",
        {frameWidth: 100, frameHeight: 100});
        
        this.load.bitmapFont("pixelFont", "images/font/font.png", "images/font/font.xml");
        
        this.load.spritesheet("cor", "images/heart_animated_1.png", 
        {frameWidth: 17, frameHeight: 17});

        this.load.image("corIndividual", "images/corIndividual.png");

        this.load.image("sign", "images/cartell.png");
    }


    create() {

        this.scene.start('menuInicial');

        this.anims.create({
        key: "dispararDreta",
        frames: this.anims.generateFrameNumbers("focDreta"),
        frameRate: 20,
        repeat: -1    
        });

        this.anims.create({
        key: "dispararEsquerra",
        frames: this.anims.generateFrameNumbers("focEsquerra"),
        frameRate: 20,
        repeat: -1    
        });

        this.anims.create({
        key: "turn",
        frames: this.anims.generateFrameNumbers("personatgeQuiet"),
        frameRate: 5,
        repeat: -1
        });

        this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("personatgeEsquerra"),
        frameRate: 10,
        repeat: -1
        });

        this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("personatgeDreta"),
        frameRate: 10,
        repeat: -1
        }); 

        this.anims.create({
        key: "explosio",
        frames: this.anims.generateFrameNumbers("explosioAnimacio"),
        frameRate: 25,
        repeat: 0
        });

        this.anims.create({
        key: "corsVida1",
        frames: this.anims.generateFrameNumbers("cor", {start: 0, end: 1}),
        frameRate: 10,
        repeat: 0
        }); 

        this.anims.create({
        key: "corsVida2",
        frames: this.anims.generateFrameNumbers("cor", {start: 1, end: 2}),
        frameRate: 10,
        repeat: 0
        });

        this.anims.create({
        key: "corsVida3",
        frames: this.anims.generateFrameNumbers("cor", {start: 2, end: 3}),
        frameRate: 10,
        repeat: 0
        });

        this.anims.create({
        key: "corsVida4",
        frames: this.anims.generateFrameNumbers("cor", {start: 3, end: 4}),
        frameRate: 10,
        repeat: 0
        });

        this.anims.create({
        key: "corsVida5",
        frames: this.anims.generateFrameNumbers("cor", {start: 4, end: 5}),
        frameRate: 10,
        repeat: 0
        });   

        this.time.addEvent({
        delay: 2500,
        callback: () => this.scene.restart({ level: this.nivellActual + 1})
        })
        
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

        

    }

    }