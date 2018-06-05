import { AbstractShape } from './AbstractShape';


export class TShape extends AbstractShape {
	constructor(color: number) {
		super(color, 0, 0, 3, 3);
		this.set([
			[1, 1, 1],
			[0, 1, 0],
			[0, 0, 0],
		]);
	}
}