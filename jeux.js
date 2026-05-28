var cursors
var souris
var compteur
var keySpace
var chute
var is1
var is2
var is3
var is4
var is5
var is6
var is7
var is8
var is9
var is0
var nb1
var nb2
var equation
var bonneReponse
var reponse
var aSaute
var saut
class Jeux extends Phaser.Scene {
    constructor(){
        super({key : 'jeux_scene'})
    }

    init(data){
    }
    
    preload(){
    console.log('Jeux');
    this.load.image('cave', 'assets/cave.avif');
    this.load.spritesheet('souris', 'assets/souriswe.png', {frameWidth:25.25, frameHeight:24});
    this.load.image('plateforme', 'assets/plateforme.jpg');
    this.load.image('fromage', 'assets/fromage.png');
    this.load.image('trappe', 'assets/trappe.png')
    }
    
    create(data){
    
    let chute = false
    saut = false
    reponse = ''

    cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    is1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
    is2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    is3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
    is4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
    is5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
    is6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
    is7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
    is8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
    is9 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
    is0 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);

    cursors.right.isDown = false;
    cursors.left.isDown = false;

    let cave = this.add.image(40, 40, 'cave');
    cave.setOrigin(0,0);
    cave.setScale(0.2);

    souris = this.physics.add.sprite(65, 610, 'souris');
    souris.setScale(1.20)
    souris.setBounce(0.2);
    souris.setCollideWorldBounds(true);

    let plateformes = this.physics.add.staticGroup();

    //contours
    plateformes.create(0, 1130, 'plateforme').refreshBody()
    plateformes.create(-984.5, 200, 'plateforme').refreshBody()
    plateformes.create(1664.5, 200, 'plateforme').refreshBody()
    plateformes.create(0,-450, 'plateforme').refreshBody()

    //plateformes
    plateformes.create(220, 575, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(240, 575, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(260, 575, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(280, 575, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(300, 575, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(320, 575, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(340, 535, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(360, 535, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(380, 535, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(400, 535, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(420, 535, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(440, 535, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(230, 490, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(350, 460, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(460, 425, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(480, 425, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(500, 425, 'plateforme').setScale(0.01).refreshBody()
    
    plateformes.create(275, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(295, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(315, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(335, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(355, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(375, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(395, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(415, 325, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(425, 325, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(545, 480, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(560, 480, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(530, 385, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(550, 385, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(560, 385, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(455, 265, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(475, 265, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(495, 265, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(505, 265, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(275, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(295, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(315, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(335, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(355, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(375, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(395, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(415, 195, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(425, 195, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(355, 160, 'plateforme').setScale(0.01).refreshBody()

    plateformes.create(200, 265, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(220, 265, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(240, 265, 'plateforme').setScale(0.01).refreshBody()
    plateformes.create(250, 265, 'plateforme').setScale(0.01).refreshBody()

    let fromages = this.physics.add.group();
    fromages.create(420, 520, 'fromage').setScale(0.15)
    fromages.create(350, 310, 'fromage').setScale(0.15)
    fromages.create(550, 465, 'fromage').setScale(0.15)
    fromages.create(220, 250, 'fromage').setScale(0.15)
    fromages.create(355, 145, 'fromage').setScale(0.15)
    compteur = 5

    let trappes = this.physics.add.group();
    trappes.create(350, 520, 'trappe').setScale(0.1)
    trappes.create(280, 310, 'trappe').setScale(0.1)


    this.physics.add.overlap(fromages, souris, mangeFromage, null, this) 
    function mangeFromage(souris, fromages)
        {
        fromages.disableBody(true, true)
        compteur -= 1
        }

    this.physics.add.overlap(trappes, souris, defaite, null, this)
    function defaite(souris, trappes)
        {
        trappes.disableBody(true, true)
        this.registry.set('cause', 'Trappe à souris');
        this.scene.switch('defaite_scene')
        }
    
    this.physics.add.collider(trappes, plateformes);
    this.physics.add.collider(fromages, plateformes);
    this.physics.add.collider(souris, plateformes);

    let retour = this.add.text(10, 10, 'Retour à l\'écran titre', { 
        font: "15px Arial", 
        fill: "#1b1717",
        lineSpacing: 7,
    });
    retour.setOrigin(0,0);

    retour.setInteractive({useHandCursor: true});
    retour.on('pointerdown', () => {this.scene.start('titre_scene')});

  
    this.anims.create({
        key: 'souris_court',
        frames: this.anims.generateFrameNumbers('souris', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    }); 

    nb1 = Math.floor(Math.random() * 100)
    nb2 = Math.floor(Math.random() * 100)
    bonneReponse = String(nb1 + nb2)

    equation = this.add.text(this.cameras.main.centerX, 660, nb1 + ' + ' + nb2, { 
        font: "20px Arial",
        fill: "#1b1717"})
    equation.setOrigin(0.5);

    }
    
    update(time, delta){

    if (Phaser.Input.Keyboard.JustDown(is1)) {reponse = reponse + '1'}
    if (Phaser.Input.Keyboard.JustDown(is2)) {reponse = reponse + '2'}
    if (Phaser.Input.Keyboard.JustDown(is3)) {reponse = reponse + '3'}
    if (Phaser.Input.Keyboard.JustDown(is4)) {reponse = reponse + '4'}
    if (Phaser.Input.Keyboard.JustDown(is5)) {reponse = reponse + '5'}
    if (Phaser.Input.Keyboard.JustDown(is6)) {reponse = reponse + '6'}
    if (Phaser.Input.Keyboard.JustDown(is7)) {reponse = reponse + '7'}
    if (Phaser.Input.Keyboard.JustDown(is8)) {reponse = reponse + '8'}
    if (Phaser.Input.Keyboard.JustDown(is9)) {reponse = reponse + '9'}
    if (Phaser.Input.Keyboard.JustDown(is0)) {reponse = reponse + '0'}
    
    function changerQuestion(equation, nb1, nb2) 
        {
        equation.setText(nb1 + ' + ' + nb2)
        equation.setColor("#1b1717")
        }

    if (reponse == bonneReponse)
        {
        saut = true
        reponse = ''
        nb1 = Math.floor(Math.random() * 100)
        nb2 = Math.floor(Math.random() * 100)
        bonneReponse = String(nb1 + nb2)
        equation.setColor("#58cd2a");
        this.time.delayedCall(500, changerQuestion, [equation, nb1, nb2], this);
        }

    if ((reponse.length == 1 && reponse[0] != bonneReponse[0]) || (reponse.length == 2 && reponse[1] != bonneReponse[1]) || (reponse.length == 3 && reponse[2] != bonneReponse[2]))
        {
        reponse = ''
        nb1 = Math.floor(Math.random() * 100)
        nb2 = Math.floor(Math.random() * 100)
        bonneReponse = String(nb1 + nb2)
        equation.setColor("#da1d1d");
        this.time.delayedCall(500, changerQuestion, [equation, nb1, nb2], this);
        }
    

    if (cursors.left.isDown)
        {
        souris.setVelocityX(-300);
        souris.setFlipX(true)
        souris.anims.play('souris_court', true)
        if (!souris.body.blocked.down)
            {souris.anims.play('souris_court', false)}
        }

    else if (cursors.right.isDown)
        {
        souris.setVelocityX(300);
        souris.setFlipX(false)
        souris.anims.play('souris_court', true);
        if (!souris.body.blocked.down)
            {souris.anims.play('souris_court', false)}
        }

    else
        {
        souris.setVelocityX(0);
        souris.anims.play('souris_court', false)
        }

   if (Phaser.Input.Keyboard.JustDown(keySpace) && saut == true)
        {
        souris.setVelocityY(-300);
        souris.anims.play('souris_court', false)
        aSaute = true
        }
   if (keySpace.isDown && saut == false)
        {
        reponse = ''
        nb1 = Math.floor(Math.random() * 100)
        nb2 = Math.floor(Math.random() * 100)
        bonneReponse = String(nb1 + nb2)
        equation.setText(nb1 + ' + ' + nb2)
        equation.setColor("#1b1717")
        }
    if (keySpace.isUp && aSaute == true)
        {
            aSaute = false
            saut = false
        }

    if (compteur == 0)
        {
        this.registry.set('temps', time/1000);
        this.scene.switch('victoire_scene');
        }

    if (souris.body.velocity.y > 350)
       {
        chute = true

       }
    
    if (souris.body.blocked.down && chute)
        {
        chute = false
        this.registry.set('cause', "Chute")
        this.scene.switch('defaite_scene')
        }

    }
}

export default Jeux