import * as CONFIG from '../../config';
import { IShape } from './Shapes/BasicShape';
import { Matrix } from '../Matrix';
import { Colors } from './Colors';
import { Drawable } from '../../Scene';

import { ScaleDecorator } from './ScaleDecorator';

export class BaseArea implements Drawable {
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

	coalesced(shape: IShape): boolean {
		const coalesced = this.matrix.coalesced(shape.matrix, shape.x, shape.y + 1);
		return coalesced;
	}

	merge(shape: IShape): void {
		this.matrix.merge(shape.matrix, shape.x, shape.y);
	}

	clear() {
		this.matrix.clear();
 		this.matrix.grid[this.matrix.grid.length - 1].fill(1);
	}
}

export type Area = BaseArea;
export const Area = ScaleDecorator(BaseArea);