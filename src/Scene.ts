import * as CONFIG from './config';
import { Drawable } from './interfaces';


export class Scene {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	private layers: Array<Drawable>;
	private animationLoop: AnimationLoop;

	constructor() {
		this.layers = [];
		this.animationLoop = AnimationLoop.getInstance();
		this.animationLoop.appendAction(this.draw.bind(this));

		this.canvas = document.createElement("canvas");
		this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);

		this.canvas.width = CONFIG.WIDTH * CONFIG.PIXEL_SIZE;
		this.canvas.height = CONFIG.HEIGHT * CONFIG.PIXEL_SIZE;
		this.canvas.style.backgroundColor = CONFIG.BACKGROUND_COLOR;
		this.canvas.style.height = `${CONFIG.HEIGHT * CONFIG.PIXEL_SIZE}px`;
		this.canvas.style.width = `${CONFIG.WIDTH * CONFIG.PIXEL_SIZE}px`;

		this.ctx.scale(CONFIG.PIXEL_SIZE, CONFIG.PIXEL_SIZE);
		this.ctx.fillStyle = CONFIG.SHAPE_COLOR;

		(window as any).CTX = this.ctx;
	}

	append(drawable: Drawable) {
		this.layers.push(drawable);
	}

	draw(time: number) {
		this.ctx.clearRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

		this.layers.forEach(drawable => {
			drawable.draw(this.ctx, time);
		});
	}
}


export class AnimationLoop {
	private static instance: AnimationLoop;

	private actions: Array<(time: number) => void>;

	private constructor() {
		this.actions = [];
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new AnimationLoop();
			this.instance.loop();
		}

		return this.instance;
	}

	appendAction(action: (time: number) => void) {
		this.actions.push(action);
	}

	loop(time = 0) {
		this.actions.forEach(action => {
			action(time);
		});
		requestAnimationFrame(this.loop.bind(this));
	}

}