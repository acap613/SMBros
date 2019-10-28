import SpriteSheet from './sprite-sheet.js';
import {loadImage, loadLevel} from './loaders.js';

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");
//remember this: the fill coords are startingX, startingY, width and height, in that order...
context.fillRect(0, 0, 50, 50,)

loadImage('./tileset.png')
    .then(image => {
    const sprite = new SpriteSheet(image, 16, 16);
    sprite.define('ground', 0, 0,);
    sprite.define('sky', 3, 23);

    loadLevel('1-1')
        .then(level => {
        console.log(level);
    });

    for (let x = 0; x < 25; ++x) {
        for (let y = 0; y < 14; ++y) {
            sprite.drawTile('sky', context, x, y);
        }
    }

    for (let x = 0; x < 25; ++x) {
        for (let y = 12; y < 14; ++y) {
            sprite.drawTile('ground', context, x, y);
        }
    }
    
    
})