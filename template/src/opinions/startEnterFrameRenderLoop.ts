import { Application } from 'pixi.js';

export function startEnterFrameRenderLoop(app: Application) {
  app.ticker
    .add(() => {
      callOnEnterFrameRecursively(app.stage);
      app.render();
      callOnExitFrameRecursively(app.stage);
    })
    .start();
}

type ObjectKeyAndChildren<K extends string> = {
  [Function in K]?: () => unknown;
} & {
  children?: Iterable<ObjectKeyAndChildren<K> | {}>;
};

export function callOnEnterFrameRecursively(target: Partial<ObjectKeyAndChildren<'onEnterFrame'>>) {
  if (target.onEnterFrame) {
    target.onEnterFrame.call(target);
  }

  if (target.children) {
    for (const child of target.children) {
      callOnEnterFrameRecursively(child);
    }
  }
}

export function callOnExitFrameRecursively(target: Partial<ObjectKeyAndChildren<'onExitFrame'>>) {
  if (target.onExitFrame) {
    target.onExitFrame.call(target);
  }

  if (target.children) {
    for (const child of target.children) {
      callOnEnterFrameRecursively(child);
    }
  }
}
