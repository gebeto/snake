export type EventType = "up" | "down" | "left" | "right" | "rotate";

export interface ManipulatorHandlers {
	[key: string]: Array<(e: any) => void>;
}

export class Manipulator {
	private static instance: Manipulator;

	private handlers: ManipulatorHandlers;

	constructor() {
		this.handlers = {};

		document.addEventListener("keydown", (e) => {
			if (e.keyCode === 65) {
				this.dispatchEvent("left", 1);
			} else if (e.keyCode === 68) {
				this.dispatchEvent("right", 1);
			} else if (e.keyCode === 87) {
				this.dispatchEvent("up", 1);
			} else if (e.keyCode === 83) {
				this.dispatchEvent("down", 1);
			} else if (e.keyCode === 81) {
				this.dispatchEvent("rotate", -1);
			} else if (e.keyCode === 69) {
				this.dispatchEvent("rotate", 1);
			}
		});
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new Manipulator();
		}
		return this.instance;
	}

	addEventListener(type: EventType, handler: (e: any) => void) {
		if (!this.handlers[type]) {
			this.handlers[type] = [];
		}

		this.handlers[type].push(handler);
	}

	dispatchEvent(type: EventType, data?: any) {
		console.log(type, data);
		if (this.handlers[type]) {
			this.handlers[type].forEach(handler => handler(data));
		}
	}
}