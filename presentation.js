class Presentation extends Phaser.Scene {
    constructor(){
        super({key : 'presentation_scene'})
    }

    init(data){
    }
    
    preload(){
    console.log('Presentation');
    this.load.image('blanc', 'assets/blanc.jpg')
    this.load.image('photo', 'assets/IMG_20250603_063510.jpg')
    this.load.image('bois', 'assets/plateforme.jpg')
    }
    
    create(data){

    let fond = this.add.image(0, 0, 'blanc');
    fond.setOrigin(0,0);
    fond.setScale(2)

    this.add.image(-863.5,-450, 'bois');

    let photo = this.add.image(414, 10, 'photo');
    photo.setOrigin(0,0);
    photo.setScale(0.2);

    let retour = this.add.text(10, 10, 'Retour à la page titre', { 
        font: "15px Arial", 
        fill: "#1b1717",
        lineSpacing: 7,
    });
    retour.setOrigin(0,0);

    retour.setInteractive({useHandCursor: true});
    retour.on('pointerdown', () => {this.scene.start('titre_scene')});

    let texte = this.add.text(10, 65, 'Go Souris a été programmé par \nCamille Trudel dans le cadre de \nson cours de programmation. Elle \nétudie au Séminaire de Sherbrooke \net a programmé Go Souris durant l\'année scolaire \n2025-2026.', { 
        font: "25px Arial", 
        fill: "#1b1717",
        lineSpacing: 9,
    });
    texte.setOrigin(0,0);

    let presentationJeux = this.add.text(10, 330, 'L\'objectif de Go Souris est de permettre aux jeunes de \npratiquer leurs additions et leurs multiplications dans un \nenvironnement interactif, ludique et attirant, qui met en \nscène des éléments familiers, c\'est-à-dire des souris. Ces \nexercices simples leur permettront de s\'améliorer tout en \ns\'amusant, ce qui augmente les chances qu\'ils utilisent cet \noutil.', { 
        font: "25px Arial", 
        fill: "#1b1717",
        lineSpacing: 9
    });
    presentationJeux.setOrigin(0,0);

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

export default Presentation