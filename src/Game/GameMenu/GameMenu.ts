import { Drawable } from '../../Scene';


export class GameMenu implements Drawable {

	mount() {
		console.log("MOUNT", this);
	}

	unmount() {
		console.log("UNMOUNT", this);
	}

	draw(ctx: CanvasRenderingContext2D) {
		const w = ctx.canvas.width;
		const h = ctx.canvas.height;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, w, h);

		ctx.textAlign = "center";
		ctx.font = "40px Arial";
		ctx.fillStyle = "white";
		ctx.fillText("TETRIS", w / 2, h / 10 + 20);

		ctx.font = "25px Arial";
		ctx.fillText("Play", w / 2, h / 2);

		ctx.font = "20px Arial";
		ctx.fillText("Leaderboard", w / 2, h / 2 + 40);
	}

}