var cursors;
var keySpace;

var config = {
    type: Phaser.AUTO,
    width: 714,
    height: 444,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },

    scene: {
       preload: preload,
        create: create,
        update: update
    }
};

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image("ciel", "assets/cielMauve.jpeg")
        this.load.spritesheet("personne", "assets/personne.png", {frameWidth:128, frameHeight:128})
        this.load.spritesheet("squellette", "assets/Squellette.png", {frameWidth:64, frameHeight:64})
        this.load.image("plateforme","assets/bois.jpeg")
    }

    function create ()
    {
        ciel = this.add.image(0, 0, "ciel");
        ciel.setOrigin(0,0);
        ciel.setScale(3);

        plateformes = this.physics.add.staticGroup();
        plateformes.create(0, 444, "plateforme")
        plateformes.create(200, 444, "plateforme")
        plateformes.create(400, 444, "plateforme")
        plateformes.create(600, 444, "plateforme")

        personne = this.physics.add.sprite(100, 0, "personne")
        personne.setCollideWorldBounds(true);
        personne.setScale(1);
        personne.setBounce(0.3);

        squellette = this.physics.add.sprite(400, 0, "squellette")
        squellette.setCollideWorldBounds(true);
        squellette.setBounce(0.1);
        squellette.setScale(2);

        this.physics.add.collider(squellette, plateformes);
        this.physics.add.collider(personne, plateformes);

        cursors = this.input.keyboard.createCursorKeys();
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.anims.create({
        key: "squel",
        frames: this.anims.generateFrameNumbers("squellette", { start:0, end: 35 }),
        frameRate: 10,
        repeat: -1
        })
        
        this.anims.create({
        key: "pers",
        frames: this.anims.generateFrameNumbers("personne", { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    }

    

    function update ()
    {
        personne.anims.play("pers", true);
        squellette.anims.play("squel", true)

        if (cursors.left.isDown)
        {
            personne.setVelocityX(-100);
        }
        else if (cursors.right.isDown)
        {
            personne.setVelocityX(100);
        }
        else
        {
            personne.setVelocityX(0)
        }

        if (keySpace.isDown)
        {
            squellette.setVelocityY(-300);  
        }
    }
