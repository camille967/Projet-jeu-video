class Defaite extends Phaser.Scene {
    constructor(){
        super({key : 'defaite_scene'})
    }

    init(data){
    }
    
    preload(){
    console.log('Defaite');
    this.load.image('blanc', 'assets/blanc.jpg');
    }
    
    create(data){
    
    this.scene.stop('jeux_scene')

    let fond = this.add.image(0, 0, 'blanc');
    fond.setOrigin(0,0);
    fond.setScale(2)

    let texte = this.add.text(116.5, 250, 'Vous avez perdu', { 
        font: "60px Arial", 
        fill: "#da1d1d"
    });
    texte.setOrigin(0,0);

    let cause = this.registry.get('cause')

    let causeDefaite = this.add.text(this.cameras.main.centerX, 380, 'Cause: ' + cause, {
        font: "30px Arial",
        fill: "#1b1717"
    })
    causeDefaite.setOrigin(0.5);

    let retour = this.add.text(205, 450, 'Retour à l\'écran titre', {
        font: "30px Arial",
        fill: "#1b1717"}
    );
    retour.setOrigin(0,0);

    retour.setInteractive({useHandCursor: true});
    retour.on('pointerdown', () => {this.scene.start('titre_scene')});

    let graphics = this.add.graphics();
    graphics.lineStyle(2, "#1b1717", 0.1);
    graphics.lineBetween(0, 0, 680, 0);
    graphics.lineBetween(0, 0, 0, 680)
    graphics.lineBetween(680, 0, 680, 680)
    graphics.lineBetween(0, 680, 680, 680)


    }
    
    

    update(time, delta){

    }
    
}

export default Defaite