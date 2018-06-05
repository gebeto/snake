import { Drawable } from '../interfaces';


export class GameMenu implements Drawable {
	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillRect(0, 0, 100, 100);
	}
}