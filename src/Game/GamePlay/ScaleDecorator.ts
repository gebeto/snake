import { Drawable } from '../../Scene';
import * as CONFIG from '../../config';

export function ScaleDecorator(DecoratedClass: new (...args: any[]) => any): any {
	return class Decorated extends DecoratedClass {
		draw(ctx: CanvasRenderingContext2D, time?: number) {
			ctx.scale(CONFIG.PIXEL_SIZE, CONFIG.PIXEL_SIZE);
			super.draw(ctx, time);
			ctx.scale(1/CONFIG.PIXEL_SIZE, 1/CONFIG.PIXEL_SIZE);
		}
	};
}