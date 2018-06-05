import { GamePlay } from './GamePlay/';
import { GameMenu } from './GameMenu/';
import { GamePause } from './GamePause/';
import { Drawable } from '../Scene';


export enum GAME_STATE {
	menu,
	play,
	pause,
}


export class GameState {
	private state?: Drawable;

	private gameMenu: GameMenu;
	private gamePlay: GamePlay;
	private gamePause: GamePause;

	constructor() {
		this.gameMenu = new GameMenu();
		this.gamePlay = new GamePlay();
		this.gamePause = new GamePause();
		this.setState(GAME_STATE.menu);
	}

	getState(): Drawable {
		return <Drawable>this.state;
	}

	setState(state: GAME_STATE) {
		if (state == GAME_STATE.menu) {
			// this.state = this.gameMenu;
			this._setState(this.gameMenu);
		} else if (state == GAME_STATE.play) {
			// this.state = this.gamePlay;
			this._setState(this.gamePlay);
		} else if (state == GAME_STATE.pause) {
			// this.state = this.gamePause;
			this._setState(this.gamePause);
		}
	}

	private _setState(newState: Drawable) {
		this.state && this.state.unmount && this.state.unmount();
		this.state = newState;
		this.state && this.state.mount && this.state.mount();
	}

}