import { TShape } from './TShape';
import { OShape } from './OShape';

export class ShapeFactory {
	constructor() {
		
	}

	createRandomShape() {
		const shapes = [
			this.createTShape,
			this.createOShape,
		];
		const createShape = shapes[(Math.random() * shapes.length) | 0];
		return createShape();
	}

	createOShape() {
		return new OShape(1);
	}

	createTShape() {
		return new TShape(2);
	}
}