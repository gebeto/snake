export class Matrix {
	width: number;
	height: number;

	grid: Array<Array<number>>;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;

		this.grid = [];
		this.fillGrid();
	}

	fillGrid() {
		for (let y = 0; y < this.height; y++) {
			const row = new Array(this.width);
			row.fill(0);
			this.grid.push(row);
		}
	}

	coalesced(to: Matrix, xOffset: number, yOffset: number): boolean {
		for (let y = 0; y < to.grid.length; y++) {
			for (let x = 0; x < to.grid[y].length; x++) {
				if (to.grid[y][x] && this.grid[yOffset + y][xOffset + x]) {
					return true;
				}
			}
		}
		return false;
	}

	merge(to: Matrix, xOffset: number, yOffset: number): void {
		for (let y = 0; y < to.grid.length; y++) {
			for (let x = 0; x < to.grid[y].length; x++) {
				if (to.grid[y][x]) {
					this.grid[yOffset + y][xOffset + x] = to.grid[y][x];
				}
			}
		}
	}

	rotate(direction: number) {
		for (let y = 0; y < this.grid.length; y++) {
			for (let x = 0; x < y; x++) {
				[
					this.grid[x][y],
					this.grid[y][x]
				] = [
					this.grid[y][x],
					this.grid[x][y]
				];
			}
		}

		if (direction > 0) {
			this.grid.forEach(row => row.reverse());
		} else {
			this.grid.reverse();
		}
 	}
}