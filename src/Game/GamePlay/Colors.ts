export class Colors {
	private static instance: Colors;
	private colors: Array<string | null>;
	private default: string;

	private constructor() {
		this.default = "black";
		this.colors = [
			null,
			"red",
			"purple",
			"green",
			"blue",
		];
	}

	public static getInstance(): Colors {
		if (!this.instance) {
			this.instance = new Colors();
		}

		return this.instance;
	}

	getColor(color: number): string {
		const resultColor = this.colors[color];
		return resultColor ? resultColor : this.default;
	}

	getColorIndex(color: string): number {
		return this.colors.indexOf(color.toLowerCase());
	}

}
