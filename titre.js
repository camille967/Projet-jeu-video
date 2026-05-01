var backspace
class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
    }
    
    preload(){
    console.log('Titre');
    this.load.image('sourisFromage', 'assets/sourisFromage.jpg');
    this.load.image('blanc', 'assets/blanc.jpg');
    }
    
    create(data){

    let fond = this.add.image(0, 0, 'blanc');
    fond.setOrigin(0,0);
    fond.setScale(2)

    let sourisFromage = this.add.image(436, 265, 'sourisFromage');
    sourisFromage.setOrigin(0,0);
    sourisFromage.setScale(0.1)

    let jouer = this.add.text(302, 365, 'Jouer', { 
        font: "30px Arial", 
        fill: "#1b1717"
    });
    jouer.setOrigin(0,0);

    jouer.setInteractive({useHandCursor: true});
    jouer.on('pointerdown', () => {this.scene.start('jeux_scene')});

    let aPropos = this.add.text(279.5, 440, 'À propos', { 
        font: "30px Arial", 
        fill: "#1b1717"
    });
    aPropos.setOrigin(0,0);

    aPropos.setInteractive({useHandCursor: true});
    aPropos.on('pointerdown', () => {this.scene.start('presentation_scene')});

    let titre = this.add.text(170, 265, 'Go Souris', {
        font:"50px Courier New",
        fill: "#b99c529c"
    })
    titre.setOrigin(0,0);
   
    let graphics = this.add.graphics();
    graphics.lineStyle(2, "#1b1717", 0.1);
    graphics.lineBetween(0, 0, 680, 0);
    graphics.lineBetween(0, 0, 0, 680);
    graphics.lineBetween(680, 0, 680, 680);
    graphics.lineBetween(0, 680, 680, 680);

    backspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE)

    }
    
    update(time, delta){

    if (backspace.isDown)
    {
        console.log(20);
    }
        
    }
    
}

export default Titre