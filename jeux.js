var cursors
var souris
class Jeux extends Phaser.Scene {
    constructor(){
        super({key : 'jeux_scene'})
    }

    init(data){
    }
    
    preload(){
    console.log('Jeux');
    this.load.image('cave', 'assets/cave.avif');
    this.load.image('beige', 'assets/beige.avif');
    this.load.spritesheet('souris', 'assets/souris.png', {frameWidth:55.5, frameHeight:41.6});
    this.load.image('plateforme', 'assets/plateforme.jpg');
    }
    
    create(data){

    let cave = this.add.image(40, 40, 'cave');
    cave.setOrigin(0,0);
    cave.setScale(0.2);

    souris = this.physics.add.sprite(80, 539, 'souris');
    souris.setBounce(0.2);
    souris.setCollideWorldBounds(true);

    let plateformes = this.physics.add.staticGroup();
    plateformes.create(0, 1130, 'plateforme').refreshBody();
    plateformes.create(-984.5, 200, 'plateforme')
    plateformes.create(1664.5, 200, 'plateforme')
    plateformes.create(0,-450, 'plateforme')

    this.physics.add.collider(souris, plateformes)

    cursors = this.input.keyboard.createCursorKeys();

    let retour = this.add.text(10, 10, 'Retour à la page titre', { 
        font: "15px Arial", 
        fill: "#1b1717",
        lineSpacing: 7,
    });
    retour.setOrigin(0,0);

    retour.setInteractive({useHandCursor: true});
    retour.on('pointerdown', () => {this.scene.start('titre_scene')});

    }
    
    update(time, delta){

    if (cursors.left.isDown)
    {
        souris.setVelocityX(-160);
    }

    else if (cursors.right.isDown)
    {
        souris.setVelocityX(160);
    }

    else
    {
        souris.setVelocityX(0);
    }
        
    }
    
}

export default Jeux