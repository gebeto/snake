import { Game } from './Game/';
import { Scene } from './Scene';


document.addEventListener("DOMContentLoaded", () => {
	const game = new Game();
	const scene = new Scene();
	scene.append(game);

	(window as any).GAME = game;
});