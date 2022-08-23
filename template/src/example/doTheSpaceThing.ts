import { Application, Container, Sprite, Texture } from 'pixi.js';

export function doTheSpaceThing(app: Application) {
  const mainScene = new ExampleScene(app.screen);
  app.stage.addChild(mainScene);
}

const backgroundTextureId = './assets/space.jpg';
const logoTextureId = 'https://pixijs.com/images/logo.svg';

export class ExampleScene extends Container {
  public readonly background: Sprite;
  public readonly logo: Sprite;

  constructor(private readonly viewRect: { width: number; height: number }) {
    super();

    const addCenterAnchoredSprite = (texture: string | Texture) => {
      if (typeof texture === 'string') {
        texture = Texture.from(texture);
      }
      const sprite = new Sprite(texture);
      sprite.anchor.set(0.5);

      this.addChild(sprite);

      return sprite;
    };

    this.background = addCenterAnchoredSprite(backgroundTextureId);
    this.logo = addCenterAnchoredSprite(logoTextureId);
  }

  onEnterFrame() {
    /**
     * Resize the background to fill the screen.
     */
    {
      const ratioX = this.viewRect.width / this.background.texture.width;
      const ratioY = this.viewRect.height / this.background.texture.height;
      const scale = Math.max(ratioX, ratioY);
      this.background.scale.set(scale);
      this.background.position.set(this.viewRect.width * 0.5, this.viewRect.height * 0.5);
    }

    /**
     * Place the logo
     * - At the center of the screen horizontally
     * - At 20% of the screen vertically
     *
     * Also, animate it to simulate a pulsing effect.
     */
    {
      this.logo.position.set(this.viewRect.width * 0.5, this.viewRect.height * 0.2);

      const time = performance.now();
      this.logo.scale.set(1 + 0.2 * Math.sin(time * 0.001));
    }
  }
}
