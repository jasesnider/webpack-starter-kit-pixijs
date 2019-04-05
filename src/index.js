// import * as PIXI from './vendor/pixi.min.js';
import * as PIXI from 'pixi.js';

//Create a Pixi Application
let app = new PIXI.Application({
  // width: 512, // default: 800
  // height: 512, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1 // default:  1
});

PIXI.loader.add('images/polar_bear.png').load(setup);

let bear;

function setup() {
  bear = new PIXI.Sprite(
    PIXI.loader.resources['images/polar_bear.png'].texture
  );
  app.stage.addChild(bear);
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  bear.x += 1;
}

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
