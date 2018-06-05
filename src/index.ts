// import { GameSingletone } from './Game/';
import { GamePlay } from './Game/';
import { Scene } from './Scene';
import { Manipulator } from './Manipulator';



document.addEventListener("DOMContentLoaded", () => {
	const scene = new Scene();
	const game = new GamePlay();
	const manipulator = Manipulator.getInstance();

	scene.append(game);
});