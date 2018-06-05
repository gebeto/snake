export class AnimationLoop {
	private static instance: AnimationLoop;

	private actions: Array<(time: number) => void>;

	private constructor() {
		this.actions = [];
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new AnimationLoop();
			this.instance.loop();
		}

		return this.instance;
	}

	appendAction(action: (time: number) => void) {
		this.actions.push(action);
	}

	loop(time = 0) {
		this.actions.forEach(action => {
			action(time);
		});
		requestAnimationFrame(this.loop.bind(this));
	}
}