import { Drawable } from '../../Scene';


export class GamePause implements Drawable {

	mount() {
		console.log("MOUNT", this);
	}

	unmount() {
		console.log("UNMOUNT", this);
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "40px Arial";
		ctx.fillText("Paused", ctx.canvas.width / 2, ctx.canvas.height / 2);

		ctx.font = "24px Arial";
		ctx.fillText("Resume", ctx.canvas.width / 2, ctx.canvas.height / 2 + 40);
		ctx.fillText("Exit", ctx.canvas.width / 2, ctx.canvas.height / 2 + 80);
	}

}