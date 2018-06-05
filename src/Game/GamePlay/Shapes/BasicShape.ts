import { Drawable } from '../../../Scene';
import { Matrix } from '../../Matrix';
import { Colors } from '../Colors';

import { ScaleDecorator } from '../ScaleDecorator';


export interface IShape {
	matrix: Matrix;
	x: number;
	y: number;
}


export class BasicBasicShape implements Drawable, IShape {
	matrix: Matrix;
	colors: Colors;

	x: number;
	y: number;
	width: number;
	height: number;

	constructor(color: string, x: number, y: number, width: number, height: number, grid: Matrix) {
		this.colors = Colors.getInstance();

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		
		this.matrix = grid;
	}

	draw(ctx: CanvasRenderingContext2D, time?: number) {
		this.matrix.grid.forEach((row, rowIndex) => {
			row.forEach((item, itemIndex) => {
				if (item) {
					ctx.fillStyle = this.colors.getColor(item);
					ctx.fillRect(this.x + itemIndex, this.y + rowIndex, 1, 1);
				}
			});
		});
	}
}


export type BasicShape = BasicBasicShape;
export const BasicShape = ScaleDecorator(BasicBasicShape);