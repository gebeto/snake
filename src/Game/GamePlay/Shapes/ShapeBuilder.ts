import { BasicShape } from './BasicShape';
import { Matrix } from '../../../Matrix';
import { Colors } from '../../../Colors';

export interface ShapeParams {
	rows: number[][];
	color: string;
	x: number;
	y: number;
}

export class ShapeBuilder {
	shapeParams: ShapeParams;
	colors: Colors;

	constructor() {
		this.shapeParams = this.reset();
		this.colors = Colors.getInstance();
	}

	reset(): ShapeParams {
		return this.shapeParams = {
			color: "white",
			x: 0,
			y: 0,
			rows: []
		}
	}

	setColor(color: string): this {
		this.shapeParams.color = color;
		return this;
	}

	setX(x: number): this {
		this.shapeParams.x = x;
		return this;
	}

	setY(y: number): this {
		this.shapeParams.y = y;
		return this;
	}

	addRow(row: Array<number>) {
		this.shapeParams.rows.push(row);
		return this;
	}

	getResult(): BasicShape {
		const rows = this.shapeParams.rows;
		rows.forEach(row => {
			row.forEach((cell, colIndex) => {
				row[colIndex] = row[colIndex] ? this.colors.getColorIndex(this.shapeParams.color) : row[colIndex];
			});
		});
		let eqMatrixSize = rows.length;
		rows.forEach((row) => {
			if (row.length > eqMatrixSize) {
				eqMatrixSize = row.length;
			}
		});

		while (rows.length < eqMatrixSize) {
			const row = new Array(eqMatrixSize);
			row.fill(0);
			rows.push(row);
		}

		const grid = new Matrix(eqMatrixSize, eqMatrixSize, rows);

		const result = new BasicShape(
			this.shapeParams.color,
			this.shapeParams.x,
			this.shapeParams.y,
			eqMatrixSize,
			eqMatrixSize,
			grid,
		);
		this.reset();
		return result;
	}
}