import './style.css';

import { boot } from './boot';
import { startEnterFrameRenderLoop } from './opinions/startEnterFrameRenderLoop';
import { doTheSpaceThing } from './example/doTheSpaceThing';

const app = boot();

startEnterFrameRenderLoop(app);

doTheSpaceThing(app);
