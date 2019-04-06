import * as PIXI from 'pixi.js';
import * as Sound from 'pixi-sound';

//Create a Pixi Application
let app = new PIXI.Application({
  // width: 512, // default: 800
  // height: 512, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1 // default:  1
});

// AUTO PLAY CODE HERE
// PIXI.sound.Sound.from({
//   url: './assets/sound/sample.ogg',
//   autoPlay: true,
//   complete: function() {
//     console.log('Sound finished');
//   }
// });

const sound = PIXI.sound.Sound.from('./assets/sound/sample.ogg');

PIXI.loader.add('./assets/images/polar_bear.png').load(setup);

let bear;

function setup() {
  bear = new PIXI.Sprite(
    PIXI.loader.resources['./assets/images/polar_bear.png'].texture
  );
  app.stage.addChild(bear);
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  bear.x += 1;
}

document.body.appendChild(app.view);
document.querySelector('#stopButton').addEventListener('click', function() {
  sound.stop();
});

document.querySelector('#playButton').addEventListener('click', function() {
  sound.play();
});
