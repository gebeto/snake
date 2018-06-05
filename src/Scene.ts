import * as CONFIG from './config';
import { Drawable } from './interfaces';


export class Scene {
	private static instance: Scene;

	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	private layers: Array<Drawable>;

	private prevTime: number;
	private dropCounter: number;
	private dropInterval: number;

	private constructor() {
		this.layers = [];
		
		this.prevTime = 0;
		this.dropCounter = 0;
		this.dropInterval = 1000;

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

	public static getInstance() {
		if (!this.instance) {
			this.instance = new Scene();
		}

		return this.instance;
	}

	loop(time = 0) {
		this.ctx.clearRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

		this.layers.forEach(drawable => {
			drawable.draw(this.ctx, time);
		});
	
		requestAnimationFrame(this.loop.bind(this));
	}

	append(drawable: Drawable) {
		this.layers.push(drawable);
	}
}