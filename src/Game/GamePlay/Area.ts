import * as CONFIG from '../../config';
import { AbstractShape } from './Shapes/AbstractShape';
import { Matrix } from '../../Matrix';
import { Colors } from '../../Colors';


export class Area {
	matrix: Matrix;
	colors: Colors;

	constructor() {
		this.colors = Colors.getInstance();

		this.matrix = new Matrix(CONFIG.WIDTH, CONFIG.HEIGHT);
		this.matrix.grid.push(new Array(CONFIG.WIDTH));
		this.matrix.grid[this.matrix.grid.length - 1].fill(1);
	}

	draw(ctx: CanvasRenderingContext2D) {
		this.matrix.grid.forEach((row, rowIndex) => {
			row.forEach((item, itemIndex) => {
				if (item) {
					ctx.fillStyle = this.colors.getColor(item);
					ctx.fillRect(itemIndex, rowIndex, 1, 1);
				}
			});
		});
	}

	coalesced(shape: AbstractShape): boolean {
		return this.matrix.coalesced(shape.matrix, shape.x, shape.y + 1);
	}

	merge(shape: AbstractShape): void {
		this.matrix.merge(shape.matrix, shape.x, shape.y);
	}
}