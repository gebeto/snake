import { Matrix } from './Matrix';

export interface Drawable {
	draw(ctx: CanvasRenderingContext2D, time?: number): any;
}

export interface IShape {
	matrix: Matrix;
}