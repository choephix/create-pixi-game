import { Application, IApplicationOptions } from 'pixi.js';
import { Ticker } from 'pixi.js';

// import { InteractionManager } from 'pixi.js';
// extensions.add('interaction', InteractionManager);

// import { BatchRenderer } from 'pixi.js';
// extensions.add('batch', BatchRenderer);

// import { AppLoaderPlugin } from 'pixi.js';
// extensions.add(AppLoaderPlugin);
// import { SpritesheetLoader } from 'pixi.js';
// extensions.add(SpritesheetLoader);

const APP_DIV_ID = 'app';

export function boot(applicationOptions: Partial<IApplicationOptions> = {}) {
  const parentElement = document.getElementById(APP_DIV_ID) ?? document.body;

  const app = new Application({
    backgroundColor: 0x1f1f2f,
    resolution: window.devicePixelRatio || 1,
    resizeTo: parentElement,
    autoDensity: true,
    antialias: true,
    autoStart: false,
    sharedTicker: false,
    ...applicationOptions,
  });

  parentElement.appendChild(app.view);

  // const ticker = new Ticker();
  // ticker.add(() => app.render());
  // ticker.start();
  // app.ticker = ticker;

  return app;
}

// import * as PIXI from 'pixi.js';
// import { gsap } from 'gsap';
// import { PixiPlugin } from 'gsap/PixiPlugin';

// PixiPlugin.registerPIXI(PIXI);
// gsap.registerPlugin(PixiPlugin);

// gsap.defaults({ overwrite: 'auto' });
// gsap.ticker.lagSmoothing(33, 33);
