import * as CONFIG from './config';
import { AnimationLoop } from './AnimationLoop';


export interface Drawable {
	draw(ctx: CanvasRenderingContext2D, time?: number): any;
	mount?(): any;
	unmount?(): any;
}


export class Scene {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	layers: Array<Drawable>;
	animationLoop: AnimationLoop;

	constructor() {
		this.layers = [];
		this.animationLoop = AnimationLoop.getInstance();
		this.animationLoop.appendAction(this.draw.bind(this));

		this.canvas = <HTMLCanvasElement>document.querySelector("canvas");
		this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

		this.canvas.width = CONFIG.WIDTH * CONFIG.PIXEL_SIZE;
		this.canvas.height = CONFIG.HEIGHT * CONFIG.PIXEL_SIZE;
		this.canvas.style.backgroundColor = CONFIG.BACKGROUND_COLOR;
		this.canvas.style.height = `${CONFIG.HEIGHT * CONFIG.PIXEL_SIZE}px`;
		this.canvas.style.width = `${CONFIG.WIDTH * CONFIG.PIXEL_SIZE}px`;

		(window as any).CTX = this.ctx;
	}

	append(drawable: Drawable) {
		this.layers.push(drawable);
	}

	draw(time: number) {
		this.ctx.clearRect(0, 0, CONFIG.WIDTH * CONFIG.PIXEL_SIZE, CONFIG.HEIGHT * CONFIG.PIXEL_SIZE);

		this.layers.forEach(drawable => {
			drawable.draw(this.ctx, time);
		});
	}
}
