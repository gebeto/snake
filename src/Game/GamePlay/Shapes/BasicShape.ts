import { AbstractShape } from './AbstractShape';
import { Matrix } from '../../../Matrix';

export class BasicShape extends AbstractShape {
	constructor(color: string, x: number, y: number, width: number, height: number, grid: Matrix) {
		super(color, x, y, width, height, grid);
	}
}