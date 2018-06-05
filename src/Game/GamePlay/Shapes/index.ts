// import { TShape } from './TShape';
// import { OShape } from './OShape';

import { ShapeBuilder } from './ShapeBuilder';

export class ShapeFactory {
	shapeBuilder: ShapeBuilder;

	constructor() {
		this.shapeBuilder = new ShapeBuilder();
	}

	createRandomShape() {
		const shapes = [
			this.createTShape,
			this.createOShape,
			this.createSShape,
			this.createZShape,
		];
		const createShape = shapes[(Math.random() * shapes.length) | 0];
		return createShape.call(this);
	}

	createOShape() {
		const shape = this.shapeBuilder
			.setColor("purple")
			.addRow([1 ,1])
			.addRow([1 ,1])
			.getResult();
		return shape;
	}

	createTShape() {
		const shape = this.shapeBuilder
			.setColor("green")
			.addRow([1, 1, 1])
			.addRow([0, 1, 0])
			.getResult();
		return shape;
	}

	createSShape() {
		const shape = this.shapeBuilder
			.setColor("blue")
			.addRow([0, 1, 1])
			.addRow([1, 1, 0])
			.getResult();
		return shape;
	}

	createZShape() {
		const shape = this.shapeBuilder
			.setColor("red")
			.addRow([1, 1, 0])
			.addRow([0, 1, 1])
			.getResult();
		return shape;
	}
}