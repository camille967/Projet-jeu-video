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
    }

    function create ()
    {
        ciel = this.add.image(0, 0, "ciel");
        ciel.setOrigin(0,0);
        ciel.setScale(3);

        personne = this.add.sprite(200, 300, "personne")
        personne.setScale(1);

        squellette = this.add.sprite(400, 300, "squellette")
        squellette.setScale(2);

        this.anims.create({
        key: "squel",
        frames: this.anims.generateFrameNumbers("squellette", { start:0, end: 35 }),
        frameRate: 10,
        repeat: -1
        })
        
        this.anims.create({
        key: 'pers',
        frames: this.anims.generateFrameNumbers("personne", { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    }

    

    function update ()
    {
        personne.anims.play('pers', true);
        squellette.anims.play("squel", true)
    }
