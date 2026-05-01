class Demarrage extends Phaser.Scene {
    constructor(){
        super({key : 'demarrage_scene'})
    }

    init(data){
    }
    
    preload(){
    console.log('Demarrage');
    this.load.image('logo', 'assets/logo.jpg');
    this.load.image('blanc', 'assets/blanc.jpg');
    }
    
    create(data){

    let fond = this.add.image(0, 0, 'blanc');
    fond.setOrigin(0,0);
    fond.setScale(2)

    let logo = this.add.image(192.9, 215, 'logo');
    logo.setOrigin(0,0);
    logo.setScale(0.2)

    let texte = this.add.text(283, 412.2, 'SOUPIS', { 
        font: "30px Arial", 
        fill: "#1b1717"
    });
    texte.setOrigin(0,0);

    let graphics = this.add.graphics();
    graphics.lineStyle(2, "#1b1717", 0.1);
    graphics.lineBetween(0, 0, 680, 0);
    graphics.lineBetween(0, 0, 0, 680)
    graphics.lineBetween(680, 0, 680, 680)
    graphics.lineBetween(0, 680, 680, 680)


    }
    
    

    update(time, delta){

    if(time > 3000){
       this.scene.switch('titre_scene');
    }

    }
    
}

export default Demarrage