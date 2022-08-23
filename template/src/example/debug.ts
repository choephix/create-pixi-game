import { Application } from 'pixi.js';

export function initializeDebugging(app: Application) {
  Object.assign(window, { app });
}
