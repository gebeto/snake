import { Drawable } from '../../interfaces';

import { Area } from './Area';
import { AbstractShape } from './Shapes/AbstractShape';
import { ShapeFactory } from './Shapes/';
import { Manipulator } from '../../Manipulator';


const shapeFactory = new ShapeFactory();


export class GamePlay implements Drawable {
	area: Area;
	currentShape: AbstractShape;
	nextShape: AbstractShape;
	manipulator: Manipulator;

	prevTime: number;
	dropCounter: number;
	dropInterval: number;

	constructor() {
		this.prevTime = 0;
		this.dropCounter = 0;
		this.dropInterval = 1000;

		this.manipulator = Manipulator.getInstance();
		this.area = new Area();
		this.currentShape = shapeFactory.createTShape();
		// this.nextShape = shapeFactory.createTShape();
		this.nextShape = shapeFactory.createRandomShape();

		this.manipulator.addEventListener("left", (e) => {
			if (this.area.matrix.coalesced(this.currentShape.matrix, this.currentShape.x - 1, this.currentShape.y)) {
				return;
			}
			this.currentShape.x -= 1;
		});
		this.manipulator.addEventListener("right", (e) => {
			if (this.area.matrix.coalesced(this.currentShape.matrix, this.currentShape.x + 1, this.currentShape.y)) {
				return;
			}
			this.currentShape.x += 1;
		});
		this.manipulator.addEventListener("down", (e) => {
			this.isColision(() => this.merge());
			this.currentShape.y += 1;
			this.dropCounter = 0;
		});
		this.manipulator.addEventListener("rotate", (e) => {
			this.currentShape.matrix.rotate(e);
			if (this.area.matrix.coalesced(this.currentShape.matrix, this.currentShape.x, this.currentShape.y)) {
				this.currentShape.matrix.rotate(-e);
			}
		});
	}

	isColision(trueHandler?: () => void, falseHandler?: () => void) {
		const result = this.area.coalesced(this.currentShape);
		const handler = (result ? trueHandler : falseHandler);
		handler && handler();
		return result;
	}

	merge() {
		this.area.merge(this.currentShape)
		this.currentShape = this.nextShape;
		// this.nextShape = shapeFactory.createTShape();
		this.nextShape = shapeFactory.createRandomShape();
	}

	draw(ctx: CanvasRenderingContext2D, time: number) {
		let deltaTime = time - this.prevTime;
		this.prevTime = time;

		this.dropCounter += deltaTime;
		if (this.dropCounter > this.dropInterval) {
			this.isColision(() => {
				this.merge();
			}, () => {
				this.currentShape.y++;
				this.dropCounter = 0;
			});
		}

		this.area.draw(ctx);
		this.currentShape.draw(ctx);
	}
}