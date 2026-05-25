import Demarrage from './demarrage.js'
import Titre from './titre.js'
import Jeux from './jeux.js'
import Presentation from './presentation.js'
import Defaite from './defaite.js'
import Victoire from './victoire.js'

const titre_scene = new Titre();
const jeux_scene = new Jeux();
const demarrage_scene = new Demarrage();
const presentation_scene = new Presentation();
const defaite_scene = new Defaite();
const victoire_scene = new Victoire();

var config = {
    type: Phaser.AUTO,
    width: 680,
    height: 680,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true
        }
    },
};

var game = new Phaser.Game(config);

game.scene.add('titre_scene', titre_scene);
game.scene.add('jeux_scene', jeux_scene);
game.scene.add('demarrage_scene', demarrage_scene);
game.scene.add('presentation_scene', presentation_scene)
game.scene.add('defaite_scene', defaite_scene)
game.scene.add('victoire_scene', victoire_scene)

game.scene.start('jeux_scene');