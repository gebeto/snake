import { GameState } from './GameState';


import { Drawable } from '../Scene';
import { GAME_STATE } from './GameState';

export class Game implements Drawable {
	state: GameState;

	constructor() {
		this.state = new GameState();
	}

	draw(ctx: CanvasRenderingContext2D, time: number) {
		this.state.getState().draw(ctx, time);
	}

	enterMenu() {
		this.state.setState(GAME_STATE.menu);
	}

	enterPlay() {
		this.state.setState(GAME_STATE.play);
	}

	enterPause() {
		this.state.setState(GAME_STATE.pause);
	}
	
}
