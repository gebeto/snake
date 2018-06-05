import { IShape, Drawable } from '../../../interfaces';
import { Matrix } from '../../../Matrix';

export abstract class AbstractShape implements IShape, Drawable {
	matrix: Matrix;
	x: number;
	y: number;
	color: number;

	constructor(color: number, x: number, y: number, width: number, height: number) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.matrix = new Matrix(width, height);
	}

	draw(ctx: CanvasRenderingContext2D) {
		this.matrix.grid.forEach((row, rowIndex) => {
			row.forEach((item, itemIndex) => {
				if (item) {
					ctx.fillRect(this.x + itemIndex, this.y + rowIndex, 1, 1);
				}
			});
		});
	}

	set(grid: Array<Array<number>>) {
		this.matrix.grid = grid;
		grid.forEach(row => {
			row.forEach((cell, index, arr) => {
				if (arr[index]) {
					arr[index] = this.color;
				}
			});
		});
	}
}