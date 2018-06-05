import { AbstractShape } from './AbstractShape';


export class OShape extends AbstractShape {
	constructor(color: number) {
		super(color, 0, 0, 2, 2);
		this.set([
			[1, 1],
			[1, 1],
		]);
	}
}