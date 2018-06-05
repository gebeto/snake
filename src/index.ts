// import { GameSingletone } from './Game/';
import { GamePlay } from './Game/';
import { Scene } from './Scene';
import { Manipulator } from './Manipulator';



document.addEventListener("DOMContentLoaded", () => {
	const scene = Scene.getInstance();
	const manipulator = Manipulator.getInstance();

	const game = new GamePlay();

	scene.append(game);
	scene.loop();
});