import { IShape, Drawable } from '../../../interfaces';
import { Matrix } from '../../../Matrix';
import { Colors } from '../../../Colors';

export abstract class AbstractShape implements IShape, Drawable {
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

	draw(ctx: CanvasRenderingContext2D) {
		this.matrix.grid.forEach((row, rowIndex) => {
			row.forEach((item, itemIndex) => {
				if (item) {
					ctx.fillStyle = this.colors.getColor(item);
					ctx.fillRect(this.x + itemIndex, this.y + rowIndex, 1, 1);
				}
			});
		});
	}

	set(grid: number[][]) {
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